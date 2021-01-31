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
import SystemTaskResult from './SystemTaskResult';

/**
* The SystemTask model module.
* @module model/SystemTask
* @version 3900.6.0
*/
export default class SystemTask {
    /**
    * Constructs a new <code>SystemTask</code>.
    * @alias module:model/SystemTask
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SystemTask</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SystemTask} obj Optional instance to populate.
    * @return {module:model/SystemTask} The populated <code>SystemTask</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemTask();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('percentComplete')) {
                obj['percentComplete'] = ApiClient.convertToType(data['percentComplete'], 'Number');
            }
            if (data.hasOwnProperty('started')) {
                obj['started'] = ApiClient.convertToType(data['started'], 'Date');
            }
            if (data.hasOwnProperty('ended')) {
                obj['ended'] = ApiClient.convertToType(data['ended'], 'Date');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = SystemTaskResult.constructFromObject(data['results']);
            }
        }
        return obj;
    }

    /**
    * The ID of this task.
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The type value associated with the task.
    * @member {String} type
    */
    'type' = undefined;
    /**
    * The status of the task.   | Type      | Description  | --------- | --------- | | Queued | initial state of a task | | Assigned |  | | Running |  | | Complete |  | | CompleteWithErrors |  | | Incomplete |  | 
    * @member {module:model/SystemTask.StatusEnum} status
    */
    'status' = undefined;
    /**
    * Task progress, with 0 representing not started and 100 representing done.
    * @member {Number} percentComplete
    */
    'percentComplete' = undefined;
    /**
    * The date the task was started.
    * @member {Date} started
    */
    'started' = undefined;
    /**
    * The date the task was completed.
    * @member {Date} ended
    */
    'ended' = undefined;
    /**
    * @member {module:model/SystemTaskResult} results
    */
    'results' = undefined;



    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
        /**
         * value: "Queued"
         * @const
         */
        "Queued": "Queued",
        /**
         * value: "Assigned"
         * @const
         */
        "Assigned": "Assigned",
        /**
         * value: "Running"
         * @const
         */
        "Running": "Running",
        /**
         * value: "Complete"
         * @const
         */
        "Complete": "Complete",
        /**
         * value: "CompleteWithErrors"
         * @const
         */
        "CompleteWithErrors": "CompleteWithErrors",
        /**
         * value: "Incomplete"
         * @const
         */
        "Incomplete": "Incomplete"    };

}