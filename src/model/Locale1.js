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
* The Locale1 model module.
* @module model/Locale1
* @version 3900.6.0
*/
export default class Locale1 {
    /**
    * Constructs a new <code>Locale1</code>.
    * The user&#x27;s localization settings.
    * @alias module:model/Locale1
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Locale1</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Locale1} obj Optional instance to populate.
    * @return {module:model/Locale1} The populated <code>Locale1</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Locale1();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('calendar')) {
                obj['calendar'] = ApiClient.convertToType(data['calendar'], 'String');
            }
            if (data.hasOwnProperty('firstDayOfWeek')) {
                obj['firstDayOfWeek'] = ApiClient.convertToType(data['firstDayOfWeek'], 'String');
            }
        }
        return obj;
    }

    /**
    * The locale specified by the user.  This locale will be used anywhere the user is allowed to customize their locale; courses may force a specific locale, overriding the user's locale preference.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The calendar type specified by the user.   | Type      | Description  | --------- | --------- | | Gregorian | Gregorian | | GregorianHijri | Gregorian & Hijri | | Hijri | Hijri | | HijriGregorian | Hijri & Gregorian | 
    * @member {module:model/Locale1.CalendarEnum} calendar
    */
    'calendar' = undefined;
    /**
    * The user's preferred first day of the week.   | Type      | Description  | --------- | --------- | | Sunday | Sunday | | Monday | Monday | | Saturday | Saturday | 
    * @member {module:model/Locale1.FirstDayOfWeekEnum} firstDayOfWeek
    */
    'firstDayOfWeek' = undefined;



    /**
    * Allowed values for the <code>calendar</code> property.
    * @enum {String}
    * @readonly
    */
    static CalendarEnum = {
        /**
         * value: "Gregorian"
         * @const
         */
        "Gregorian": "Gregorian",
        /**
         * value: "GregorianHijri"
         * @const
         */
        "GregorianHijri": "GregorianHijri",
        /**
         * value: "Hijri"
         * @const
         */
        "Hijri": "Hijri",
        /**
         * value: "HijriGregorian"
         * @const
         */
        "HijriGregorian": "HijriGregorian"    };
    /**
    * Allowed values for the <code>firstDayOfWeek</code> property.
    * @enum {String}
    * @readonly
    */
    static FirstDayOfWeekEnum = {
        /**
         * value: "Sunday"
         * @const
         */
        "Sunday": "Sunday",
        /**
         * value: "Monday"
         * @const
         */
        "Monday": "Monday",
        /**
         * value: "Saturday"
         * @const
         */
        "Saturday": "Saturday"    };

}
