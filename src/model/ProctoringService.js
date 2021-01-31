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
import Availability14 from './Availability14';

/**
* The ProctoringService model module.
* @module model/ProctoringService
* @version 3900.6.0
*/
export default class ProctoringService {
    /**
    * Constructs a new <code>ProctoringService</code>.
    * @alias module:model/ProctoringService
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ProctoringService</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProctoringService} obj Optional instance to populate.
    * @return {module:model/ProctoringService} The populated <code>ProctoringService</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProctoringService();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('handle')) {
                obj['handle'] = ApiClient.convertToType(data['handle'], 'String');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
            if (data.hasOwnProperty('assessmentSettingsUrl')) {
                obj['assessmentSettingsUrl'] = ApiClient.convertToType(data['assessmentSettingsUrl'], 'String');
            }
            if (data.hasOwnProperty('assessmentSettingsCustomParameters')) {
                obj['assessmentSettingsCustomParameters'] = ApiClient.convertToType(data['assessmentSettingsCustomParameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('browserDownloadUrl')) {
                obj['browserDownloadUrl'] = ApiClient.convertToType(data['browserDownloadUrl'], 'String');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability14.constructFromObject(data['availability']);
            }
        }
        return obj;
    }

    /**
    * The ID associated with this proctoring service.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The name of the proctoring service.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The handle that uniquely identifies this proctoring service.
    * @member {String} handle
    */
    'handle' = undefined;
    /**
    * The vendors of the proctoring service.   | Type      | Description  | --------- | --------- | | Respondus |  | | Internal |  | 
    * @member {module:model/ProctoringService.VendorEnum} vendor
    */
    'vendor' = undefined;
    /**
    * The url for the vendors assessment settings LTI tool.
    * @member {String} assessmentSettingsUrl
    */
    'assessmentSettingsUrl' = undefined;
    /**
    * Custom launch parameters for the vendors assessment settings LTI tool.
    * @member {Object.<String, String>} assessmentSettingsCustomParameters
    */
    'assessmentSettingsCustomParameters' = undefined;
    /**
    * The download url for the vendors secure browser.
    * @member {String} browserDownloadUrl
    */
    'browserDownloadUrl' = undefined;
    /**
    * @member {module:model/Availability14} availability
    */
    'availability' = undefined;



    /**
    * Allowed values for the <code>vendor</code> property.
    * @enum {String}
    * @readonly
    */
    static VendorEnum = {
        /**
         * value: "Respondus"
         * @const
         */
        "Respondus": "Respondus",
        /**
         * value: "Internal"
         * @const
         */
        "Internal": "Internal"    };

}
