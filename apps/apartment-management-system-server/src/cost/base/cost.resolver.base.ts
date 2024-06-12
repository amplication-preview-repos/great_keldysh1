/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Cost } from "./Cost";
import { CostCountArgs } from "./CostCountArgs";
import { CostFindManyArgs } from "./CostFindManyArgs";
import { CostFindUniqueArgs } from "./CostFindUniqueArgs";
import { CreateCostArgs } from "./CreateCostArgs";
import { UpdateCostArgs } from "./UpdateCostArgs";
import { DeleteCostArgs } from "./DeleteCostArgs";
import { Apartment } from "../../apartment/base/Apartment";
import { CostService } from "../cost.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Cost)
export class CostResolverBase {
  constructor(
    protected readonly service: CostService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Cost",
    action: "read",
    possession: "any",
  })
  async _costsMeta(
    @graphql.Args() args: CostCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Cost])
  @nestAccessControl.UseRoles({
    resource: "Cost",
    action: "read",
    possession: "any",
  })
  async costs(@graphql.Args() args: CostFindManyArgs): Promise<Cost[]> {
    return this.service.costs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Cost, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Cost",
    action: "read",
    possession: "own",
  })
  async cost(@graphql.Args() args: CostFindUniqueArgs): Promise<Cost | null> {
    const result = await this.service.cost(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Cost)
  @nestAccessControl.UseRoles({
    resource: "Cost",
    action: "create",
    possession: "any",
  })
  async createCost(@graphql.Args() args: CreateCostArgs): Promise<Cost> {
    return await this.service.createCost({
      ...args,
      data: {
        ...args.data,

        apartment: args.data.apartment
          ? {
              connect: args.data.apartment,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Cost)
  @nestAccessControl.UseRoles({
    resource: "Cost",
    action: "update",
    possession: "any",
  })
  async updateCost(@graphql.Args() args: UpdateCostArgs): Promise<Cost | null> {
    try {
      return await this.service.updateCost({
        ...args,
        data: {
          ...args.data,

          apartment: args.data.apartment
            ? {
                connect: args.data.apartment,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Cost)
  @nestAccessControl.UseRoles({
    resource: "Cost",
    action: "delete",
    possession: "any",
  })
  async deleteCost(@graphql.Args() args: DeleteCostArgs): Promise<Cost | null> {
    try {
      return await this.service.deleteCost(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Apartment, {
    nullable: true,
    name: "apartment",
  })
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "read",
    possession: "any",
  })
  async getApartment(
    @graphql.Parent() parent: Cost
  ): Promise<Apartment | null> {
    const result = await this.service.getApartment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}