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
* The CreateAssignmentResult model module.
* @module model/CreateAssignmentResult
* @version 3900.6.0
*/
export default class CreateAssignmentResult {
    /**
    * Constructs a new <code>CreateAssignmentResult</code>.
    * @alias module:model/CreateAssignmentResult
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateAssignmentResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateAssignmentResult} obj Optional instance to populate.
    * @return {module:model/CreateAssignmentResult} The populated <code>CreateAssignmentResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAssignmentResult();
                        
            
            if (data.hasOwnProperty('contentId')) {
                obj['contentId'] = ApiClient.convertToType(data['contentId'], 'String');
            }
            if (data.hasOwnProperty('gradeColumnId')) {
                obj['gradeColumnId'] = ApiClient.convertToType(data['gradeColumnId'], 'String');
            }
            if (data.hasOwnProperty('assessmentId')) {
                obj['assessmentId'] = ApiClient.convertToType(data['assessmentId'], 'String');
            }
            if (data.hasOwnProperty('questionIds')) {
                obj['questionIds'] = ApiClient.convertToType(data['questionIds'], ['String']);
            }
            if (data.hasOwnProperty('attachmentIds')) {
                obj['attachmentIds'] = ApiClient.convertToType(data['attachmentIds'], ['String']);
            }
        }
        return obj;
    }

    /**
    * Id of the content created during the assignment creation.
    * @member {String} contentId
    */
    'contentId' = undefined;
    /**
    * Id of the grade column created during the assignment creation.
    * @member {String} gradeColumnId
    */
    'gradeColumnId' = undefined;
    /**
    * Id of the assessment created during the assignment creation.  This is only created for Ultra course assignments.
    * @member {String} assessmentId
    */
    'assessmentId' = undefined;
    /**
    * Ids of the assessment questions created during the assignment creation.  This is only created for Ultra course assignments.
    * @member {Array.<String>} questionIds
    */
    'questionIds' = undefined;
    /**
    * Ids of the file attachments created during assignment creation.  This is only created for Classic course assignments
    * @member {Array.<String>} attachmentIds
    */
    'attachmentIds' = undefined;




}