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
import GradingPeriod from './GradingPeriod';
import PagingInfo from './PagingInfo';

/**
* The InlineResponse20021 model module.
* @module model/InlineResponse20021
* @version 3900.6.0
*/
export default class InlineResponse20021 {
    /**
    * Constructs a new <code>InlineResponse20021</code>.
    * @alias module:model/InlineResponse20021
    * @class
    * @param results {Array.<module:model/GradingPeriod>} 
    */

    constructor(results) {
        
        
        this['results'] = results;
        
    }

    /**
    * Constructs a <code>InlineResponse20021</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/InlineResponse20021} obj Optional instance to populate.
    * @return {module:model/InlineResponse20021} The populated <code>InlineResponse20021</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20021();
                        
            
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [GradingPeriod]);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = PagingInfo.constructFromObject(data['paging']);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/GradingPeriod>} results
    */
    'results' = undefined;
    /**
    * @member {module:model/PagingInfo} paging
    */
    'paging' = undefined;




}
