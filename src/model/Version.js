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
* The Version model module.
* @module model/Version
* @version 3900.6.0
*/
export default class Version {
    /**
    * Constructs a new <code>Version</code>.
    * @alias module:model/Version
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Version} obj Optional instance to populate.
    * @return {module:model/Version} The populated <code>Version</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Version();
                        
            
            if (data.hasOwnProperty('major')) {
                obj['major'] = ApiClient.convertToType(data['major'], 'Number');
            }
            if (data.hasOwnProperty('minor')) {
                obj['minor'] = ApiClient.convertToType(data['minor'], 'Number');
            }
            if (data.hasOwnProperty('patch')) {
                obj['patch'] = ApiClient.convertToType(data['patch'], 'Number');
            }
            if (data.hasOwnProperty('build')) {
                obj['build'] = ApiClient.convertToType(data['build'], 'String');
            }
        }
        return obj;
    }

    /**
    * The 'major' version of this product.  Typically changes for releases with significant new features or breaking API changes.
    * @member {Number} major
    */
    'major' = undefined;
    /**
    * The 'minor' version of this product.  Typically changes for releases with minor feature updates.
    * @member {Number} minor
    */
    'minor' = undefined;
    /**
    * The 'patch' version of this product.  Typically changes for backwards-compatible hotfixes.
    * @member {Number} patch
    */
    'patch' = undefined;
    /**
    * An internal identifier for the build artifact backing this version.
    * @member {String} build
    */
    'build' = undefined;




}
