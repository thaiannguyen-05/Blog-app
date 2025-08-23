import { CanActivate, ExecutionContext, ForbiddenException, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLE_KEY } from "src/common/decorator/role.decorator";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class RolesGuard implements CanActivate {
    @Inject(UserService)
    private userService: UserService

    @Inject()
    private reflector: Reflector

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLE_KEY, [
            context.getHandler(), // resently method
            context.getClass() // class controller
        ])

        if (!requiredRoles || requiredRoles.length === 0) return true

        const request = context.switchToHttp().getRequest()
        const user = request.user
        if (!user.id) throw new ForbiddenException("user not authentication")

        const userithRole = await this.userService.getPermisson(user.id)
        if (!userithRole) throw new ForbiddenException("user not found")

        const userRoles = userithRole.userRoles.map(ur => ur.role.name)
        const hasRole = requiredRoles.some(role => userRoles.includes(role))

        if (!hasRole) throw new ForbiddenException("User have not permission")

        return true
    }
}