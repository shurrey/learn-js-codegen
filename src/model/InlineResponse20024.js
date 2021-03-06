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
import CourseMembership from './CourseMembership';
import PagingInfo from './PagingInfo';

/**
* The InlineResponse20024 model module.
* @module model/InlineResponse20024
* @version 3900.6.0
*/
export default class InlineResponse20024 {
    /**
    * Constructs a new <code>InlineResponse20024</code>.
    * @alias module:model/InlineResponse20024
    * @class
    * @param results {Array.<module:model/CourseMembership>} 
    */

    constructor(results) {
        
        
        this['results'] = results;
        
    }

    /**
    * Constructs a <code>InlineResponse20024</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20024} obj Optional instance to populate.
    * @return {module:model/InlineResponse20024} The populated <code>InlineResponse20024</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20024();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [CourseMembership]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = PagingInfo.constructFromObject(data['paging']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/CourseMembership>} results
    */
    'results' = undefined;
    /**
    * @member {module:model/PagingInfo} paging
    */
    'paging' = undefined;




}
