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
* The SISLogEntry model module.
* @module model/SISLogEntry
* @version 3900.6.0
*/
export default class SISLogEntry {
    /**
    * Constructs a new <code>SISLogEntry</code>.
    * @alias module:model/SISLogEntry
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SISLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SISLogEntry} obj Optional instance to populate.
    * @return {module:model/SISLogEntry} The populated <code>SISLogEntry</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SISLogEntry();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * Id of the log message
    * @member {String} id
    */
    'id' = undefined;
    /**
    * log message created date
    * @member {Date} created
    */
    'created' = undefined;
    /**
    * An enumerated value of LogLevel describing log verbosity level   | Type      | Description  | --------- | --------- | | Debug |  | | Information |  | | Warning |  | | Error |  | 
    * @member {module:model/SISLogEntry.LevelEnum} level
    */
    'level' = undefined;
    /**
    * @member {String} message
    */
    'message' = undefined;



    /**
    * Allowed values for the <code>level</code> property.
    * @enum {String}
    * @readonly
    */
    static LevelEnum = {
        /**
         * value: "Debug"
         * @const
         */
        "Debug": "Debug",
        /**
         * value: "Information"
         * @const
         */
        "Information": "Information",
        /**
         * value: "Warning"
         * @const
         */
        "Warning": "Warning",
        /**
         * value: "Error"
         * @const
         */
        "Error": "Error"    };

}