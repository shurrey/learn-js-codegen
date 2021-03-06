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
import LTIDomainConfig from './LTIDomainConfig';
import PagingInfo from './PagingInfo';

/**
* The InlineResponse20036 model module.
* @module model/InlineResponse20036
* @version 3900.6.0
*/
export default class InlineResponse20036 {
    /**
    * Constructs a new <code>InlineResponse20036</code>.
    * @alias module:model/InlineResponse20036
    * @class
    * @param results {Array.<module:model/LTIDomainConfig>} 
    */

    constructor(results) {
        
        
        this['results'] = results;
        
    }

    /**
    * Constructs a <code>InlineResponse20036</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20036} obj Optional instance to populate.
    * @return {module:model/InlineResponse20036} The populated <code>InlineResponse20036</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20036();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [LTIDomainConfig]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = PagingInfo.constructFromObject(data['paging']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/LTIDomainConfig>} results
    */
    'results' = undefined;
    /**
    * @member {module:model/PagingInfo} paging
    */
    'paging' = undefined;




}
