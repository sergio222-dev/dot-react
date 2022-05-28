import { UserTypes } from "@lib/User/Infrastructure/DI/user.types";
import { UtilsTypes } from "@lib/Shared/Infrastructure/DI/utils.types";

const types = { ...UserTypes, ...UtilsTypes };

export default types;
