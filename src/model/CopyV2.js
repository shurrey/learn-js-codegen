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
import SettingsCopyOptionsV2 from './SettingsCopyOptionsV2';

/**
* The CopyV2 model module.
* @module model/CopyV2
* @version 3900.6.0
*/
export default class CopyV2 {
    /**
    * Constructs a new <code>CopyV2</code>.
    * The options which will be used when copying the specified course
    * @alias module:model/CopyV2
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CopyV2</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CopyV2} obj Optional instance to populate.
    * @return {module:model/CopyV2} The populated <code>CopyV2</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyV2();
                        
            
            if (data.hasOwnProperty('adaptiveReleaseRules')) {
                obj['adaptiveReleaseRules'] = ApiClient.convertToType(data['adaptiveReleaseRules'], 'Boolean');
            }
            if (data.hasOwnProperty('announcements')) {
                obj['announcements'] = ApiClient.convertToType(data['announcements'], 'Boolean');
            }
            if (data.hasOwnProperty('assessments')) {
                obj['assessments'] = ApiClient.convertToType(data['assessments'], 'Boolean');
            }
            if (data.hasOwnProperty('blogs')) {
                obj['blogs'] = ApiClient.convertToType(data['blogs'], 'Boolean');
            }
            if (data.hasOwnProperty('calendar')) {
                obj['calendar'] = ApiClient.convertToType(data['calendar'], 'Boolean');
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], 'Boolean');
            }
            if (data.hasOwnProperty('contentAlignments')) {
                obj['contentAlignments'] = ApiClient.convertToType(data['contentAlignments'], 'Boolean');
            }
            if (data.hasOwnProperty('contentAreas')) {
                obj['contentAreas'] = ApiClient.convertToType(data['contentAreas'], 'Boolean');
            }
            if (data.hasOwnProperty('discussions')) {
                obj['discussions'] = ApiClient.convertToType(data['discussions'], 'String');
            }
            if (data.hasOwnProperty('glossary')) {
                obj['glossary'] = ApiClient.convertToType(data['glossary'], 'Boolean');
            }
            if (data.hasOwnProperty('gradebook')) {
                obj['gradebook'] = ApiClient.convertToType(data['gradebook'], 'Boolean');
            }
            if (data.hasOwnProperty('groupSettings')) {
                obj['groupSettings'] = ApiClient.convertToType(data['groupSettings'], 'Boolean');
            }
            if (data.hasOwnProperty('journals')) {
                obj['journals'] = ApiClient.convertToType(data['journals'], 'Boolean');
            }
            if (data.hasOwnProperty('retentionRules')) {
                obj['retentionRules'] = ApiClient.convertToType(data['retentionRules'], 'Boolean');
            }
            if (data.hasOwnProperty('rubrics')) {
                obj['rubrics'] = ApiClient.convertToType(data['rubrics'], 'Boolean');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = SettingsCopyOptionsV2.constructFromObject(data['settings']);
            }
            if (data.hasOwnProperty('tasks')) {
                obj['tasks'] = ApiClient.convertToType(data['tasks'], 'Boolean');
            }
            if (data.hasOwnProperty('wikis')) {
                obj['wikis'] = ApiClient.convertToType(data['wikis'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Represents whether or not the adaptive release rules will be copied.
    * @member {Boolean} adaptiveReleaseRules
    */
    'adaptiveReleaseRules' = undefined;
    /**
    * Represents whether or not the announcements will be copied.
    * @member {Boolean} announcements
    */
    'announcements' = undefined;
    /**
    * Represents whether or not the assessments will be copied.
    * @member {Boolean} assessments
    */
    'assessments' = undefined;
    /**
    * Represents whether or not the blogs will be copied.
    * @member {Boolean} blogs
    */
    'blogs' = undefined;
    /**
    * Represents whether or not the calendar will be copied.
    * @member {Boolean} calendar
    */
    'calendar' = undefined;
    /**
    * Represents whether or not the contacts information will be copied.
    * @member {Boolean} contacts
    */
    'contacts' = undefined;
    /**
    * Represents whether or not the content alignments will be copied.
    * @member {Boolean} contentAlignments
    */
    'contentAlignments' = undefined;
    /**
    * Represents whether or not the content areas will be copied.
    * @member {Boolean} contentAreas
    */
    'contentAreas' = undefined;
    /**
    * Represents whether and how to copy the discussion forum   | Type      | Description  | --------- | --------- | | None | Discussion board will not be copied | | ForumsAndStarterPosts | Discussion board with Formus and starter posts will be copied | | ForumsOnly | Discussion board with only forums will be copied | 
    * @member {module:model/CopyV2.DiscussionsEnum} discussions
    */
    'discussions' = undefined;
    /**
    * Represents whether or not the glossary will be copied.
    * @member {Boolean} glossary
    */
    'glossary' = undefined;
    /**
    * Represents whether or not the grade book, columns and settings will be copied.
    * @member {Boolean} gradebook
    */
    'gradebook' = undefined;
    /**
    * Represents whether or not the group settings will be copied.
    * @member {Boolean} groupSettings
    */
    'groupSettings' = undefined;
    /**
    * Represents whether or not the journals will be copied.
    * @member {Boolean} journals
    */
    'journals' = undefined;
    /**
    * Represents whether or not the retention rules will be copied.
    * @member {Boolean} retentionRules
    */
    'retentionRules' = undefined;
    /**
    * Represents whether or not the rubrics will be copied.
    * @member {Boolean} rubrics
    */
    'rubrics' = undefined;
    /**
    * @member {module:model/SettingsCopyOptionsV2} settings
    */
    'settings' = undefined;
    /**
    * Represents whether or not the tasks will be copied.
    * @member {Boolean} tasks
    */
    'tasks' = undefined;
    /**
    * Represents whether or not the wikis will be copied.
    * @member {Boolean} wikis
    */
    'wikis' = undefined;



    /**
    * Allowed values for the <code>discussions</code> property.
    * @enum {String}
    * @readonly
    */
    static DiscussionsEnum = {
        /**
         * value: "None"
         * @const
         */
        "None": "None",
        /**
         * value: "ForumsAndStarterPosts"
         * @const
         */
        "ForumsAndStarterPosts": "ForumsAndStarterPosts",
        /**
         * value: "ForumsOnly"
         * @const
         */
        "ForumsOnly": "ForumsOnly"    };

}
