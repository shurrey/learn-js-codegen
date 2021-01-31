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
import Availability7 from './Availability7';
import Enrollment2 from './Enrollment2';
import Locale from './Locale';

/**
* The Body43 model module.
* @module model/Body43
* @version 3900.6.0
*/
export default class Body43 {
    /**
    * Constructs a new <code>Body43</code>.
    * @alias module:model/Body43
    * @class
    * @param courseId {String} The Course ID attribute, shown to users in the UI.
    * @param name {String} The name of the course.
    */

    constructor(courseId, name) {
        
        
        this['courseId'] = courseId;
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>Body43</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body43} obj Optional instance to populate.
    * @return {module:model/Body43} The populated <code>Body43</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body43();
                        
            
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('dataSourceId')) {
                obj['dataSourceId'] = ApiClient.convertToType(data['dataSourceId'], 'String');
            }
            if (data.hasOwnProperty('courseId')) {
                obj['courseId'] = ApiClient.convertToType(data['courseId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'Boolean');
            }
            if (data.hasOwnProperty('ultraStatus')) {
                obj['ultraStatus'] = ApiClient.convertToType(data['ultraStatus'], 'String');
            }
            if (data.hasOwnProperty('allowGuests')) {
                obj['allowGuests'] = ApiClient.convertToType(data['allowGuests'], 'Boolean');
            }
            if (data.hasOwnProperty('closedComplete')) {
                obj['closedComplete'] = ApiClient.convertToType(data['closedComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('termId')) {
                obj['termId'] = ApiClient.convertToType(data['termId'], 'String');
            }
            if (data.hasOwnProperty('availability')) {
                obj['availability'] = Availability7.constructFromObject(data['availability']);
            }
            if (data.hasOwnProperty('enrollment')) {
                obj['enrollment'] = Enrollment2.constructFromObject(data['enrollment']);
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = Locale.constructFromObject(data['locale']);
            }
        }
        return obj;
    }

    /**
    * An optional externally-defined unique ID for the course. Defaults to the courseId.  Formerly known as 'batchUid'.
    * @member {String} externalId
    */
    'externalId' = undefined;
    /**
    * The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax \"externalId:math101\".
    * @member {String} dataSourceId
    */
    'dataSourceId' = undefined;
    /**
    * The Course ID attribute, shown to users in the UI.
    * @member {String} courseId
    */
    'courseId' = undefined;
    /**
    * The name of the course.
    * @member {String} name
    */
    'name' = undefined;
    /**
    * The description of the course.
    * @member {String} description
    */
    'description' = undefined;
    /**
    * Whether this object represents an Organization. Defaults to false.
    * @member {Boolean} organization
    */
    'organization' = undefined;
    /**
    * Whether the course is rendered using Classic or Ultra Course View.   | Type      | Description  | --------- | --------- | | Undecided | The ultra status is not decided. | | Classic | The course is decided as classic. | | Ultra | The course is decided as ultra | | UltraPreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state | 
    * @member {module:model/Body43.UltraStatusEnum} ultraStatus
    */
    'ultraStatus' = undefined;
    /**
    * Whether guests (users with the role guest) are allowed access to the course. Defaults to true.
    * @member {Boolean} allowGuests
    */
    'allowGuests' = undefined;
    /**
    * This status does not affect availability of the course for viewing in any way. closedComplete is valid for both Ultra and Classic courses. If an Ultra course is in closedComplete mode, updates are not possible. For a Classic course in closedComplete mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated.
    * @member {Boolean} closedComplete
    */
    'closedComplete' = undefined;
    /**
    * The ID of the term associated to this course. This may optionally be the term's externalId using the syntax \"externalId:spring.2016\".
    * @member {String} termId
    */
    'termId' = undefined;
    /**
    * @member {module:model/Availability7} availability
    */
    'availability' = undefined;
    /**
    * @member {module:model/Enrollment2} enrollment
    */
    'enrollment' = undefined;
    /**
    * @member {module:model/Locale} locale
    */
    'locale' = undefined;



    /**
    * Allowed values for the <code>ultraStatus</code> property.
    * @enum {String}
    * @readonly
    */
    static UltraStatusEnum = {
        /**
         * value: "Undecided"
         * @const
         */
        "Undecided": "Undecided",
        /**
         * value: "Classic"
         * @const
         */
        "Classic": "Classic",
        /**
         * value: "Ultra"
         * @const
         */
        "Ultra": "Ultra",
        /**
         * value: "UltraPreview"
         * @const
         */
        "UltraPreview": "UltraPreview"    };

}