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
import CourseMessage from './CourseMessage';
import PagingInfo from './PagingInfo';

/**
* The InlineResponse20026 model module.
* @module model/InlineResponse20026
* @version 3900.6.0
*/
export default class InlineResponse20026 {
    /**
    * Constructs a new <code>InlineResponse20026</code>.
    * @alias module:model/InlineResponse20026
    * @class
    * @param results {Array.<module:model/CourseMessage>} 
    */

    constructor(results) {
        
        
        this['results'] = results;
        
    }

    /**
    * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20026} obj Optional instance to populate.
    * @return {module:model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20026();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CourseMessage]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = PagingInfo.constructFromObject(data['paging']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/CourseMessage>} results
    */
    'results' = undefined;
    /**
    * @member {module:model/PagingInfo} paging
    */
    'paging' = undefined;




}