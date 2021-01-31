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
* The Duration model module.
* @module model/Duration
* @version 3900.6.0
*/
export default class Duration {
    /**
    * Constructs a new <code>Duration</code>.
    * Duration indicates when the System Announcement is Available based on whether it is Permanent or if the date/time of the request falls within its Start &amp; End dates.
    * @alias module:model/Duration
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Duration</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Duration} obj Optional instance to populate.
    * @return {module:model/Duration} The populated <code>Duration</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Duration();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Indicates whether this System Announcement is always displayed (Permanent) or if it is shown only between the Start and End dates (Restricted).   | Type      | Description  | --------- | --------- | | Permanent | The Announcement will always be displayed. | | Restricted | The Announcement will start being displayed on Duration.Start and stop being displayed on Duration.End | 
    * @member {module:model/Duration.TypeEnum} type
    */
    'type' = undefined;
    /**
    * The date this Announcement starts being Available.
    * @member {Date} start
    */
    'start' = undefined;
    /**
    * The date this Announcement stops being Available.
    * @member {Date} end
    */
    'end' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "Permanent"
         * @const
         */
        "Permanent": "Permanent",
        /**
         * value: "Restricted"
         * @const
         */
        "Restricted": "Restricted"    };

}