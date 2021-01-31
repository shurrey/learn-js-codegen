/**
 * Learn APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3900.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class SystemRoleEnum.
* @enum {}
* @readonly
*/
export default class SystemRoleEnum {
        /**
         * value: "SystemAdmin"
         * @const
         */
        SystemAdmin = "SystemAdmin";

        /**
         * value: "SystemSupport"
         * @const
         */
        SystemSupport = "SystemSupport";

        /**
         * value: "CourseCreator"
         * @const
         */
        CourseCreator = "CourseCreator";

        /**
         * value: "CourseSupport"
         * @const
         */
        CourseSupport = "CourseSupport";

        /**
         * value: "AccountAdmin"
         * @const
         */
        AccountAdmin = "AccountAdmin";

        /**
         * value: "Guest"
         * @const
         */
        Guest = "Guest";

        /**
         * value: "User"
         * @const
         */
        User = "User";

        /**
         * value: "Observer"
         * @const
         */
        Observer = "Observer";

        /**
         * value: "Integration"
         * @const
         */
        Integration = "Integration";

        /**
         * value: "Portal"
         * @const
         */
        Portal = "Portal";


    /**
    * Returns a <code>SystemRoleEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SystemRoleEnum} The enum <code>SystemRoleEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
