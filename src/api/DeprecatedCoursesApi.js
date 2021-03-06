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

import ApiClient from "../ApiClient";
import Body65 from '../model/Body65';
import Body66 from '../model/Body66';
import Body67 from '../model/Body67';
import Body68 from '../model/Body68';
import Body69 from '../model/Body69';
import Course from '../model/Course';
import CourseV2 from '../model/CourseV2';
import InlineResponse20030 from '../model/InlineResponse20030';
import InlineResponse20050 from '../model/InlineResponse20050';
import RestException from '../model/RestException';

/**
* DeprecatedCourses service.
* @module api/DeprecatedCoursesApi
* @version 3900.6.0
*/
export default class DeprecatedCoursesApi {

    /**
    * Constructs a new DeprecatedCoursesApi. 
    * @alias module:api/DeprecatedCoursesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdCopyPost operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdCopyPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy Course
     * Creates an exact copy of an existing Course into a new Course.  Users with entitlements &#x27;system.course.copy.EXECUTE&#x27; can create a course copy. Users with entitlements &#x27;system.org.copy.EXECUTE&#x27; can create an organization copy. All users&#x27;s must also have &#x27;course.content.copy.EXECUTE&#x27; entitlement associated with the specified source courseId.  **Since**: 3300.0.0  **Deprecated**: since 3800.0.0; use the v2 end-point instead.
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdCopyPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1CoursesCourseIdCopyPost(body, courseId, callback) {
      let postBody = body;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}/copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdDelete operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Course
     * Deletes a course or organization in synchronous fashion.  The &#x27;system.course.DELETE&#x27; entitlement is needed to delete a course, while &#x27;system.org.DELETE&#x27; is needed for an organization.  **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV1CoursesCourseIdDelete(courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'removeFiles': opts['removeFiles']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdGet operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Course} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Course
     * Loads a specific course or organization.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:  - id - courseId - name - description - organization - readOnly - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Course}
     */
    learnApiPublicV1CoursesCourseIdGet(courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Course;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesCourseIdPatch operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Course} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Course
     * Updates a course or organization.  To update a course, the user must have either &#x27;system.course|org.properties.MODIFY&#x27; or &#x27;course.configure-properties.EXECUTE&#x27; entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below:    | Field                           | Entitlements Required                                                  |  |---------------------------------|------------------------------------------------------------------------|  | name                            | course.name.MODIFY                                                     |  | description                     | course.name.MODIFY                                                     |  | allowGuests                     | course.configure-guest-access.EXECUTE                                  |  | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |  | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |    **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesCourseIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Course}
     */
    learnApiPublicV1CoursesCourseIdPatch(body, courseId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Course;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses/{courseId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesGet operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20050} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Courses
     * Returns a list of courses and organizations.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:  - id - courseId - name - description - organization - readOnly - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3000.1.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20050}
     */
    learnApiPublicV1CoursesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'courseId': opts['courseId'],
        'name': opts['name'],
        'description': opts['description'],
        'externalId': opts['externalId'],
        'created': opts['created'],
        'allowGuests': opts['allowGuests'],
        'createdCompare': opts['createdCompare'],
        'availability.available': opts['availabilityAvailable'],
        'dataSourceId': opts['dataSourceId'],
        'termId': opts['termId'],
        'organization': opts['organization'],
        'sort': opts['sort'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20050;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV1CoursesPost operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Course} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Course
     * Creates a course or organization.  The &#x27;system.course.CREATE&#x27; entitlement is needed to create a course, while &#x27;system.org.CREATE&#x27; is needed for an organization.  **Since**: 2015.11.0  **Deprecated**: since 3400.8.0; use the v2 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV1CoursesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Course}
     */
    learnApiPublicV1CoursesPost(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Course;

      return this.apiClient.callApi(
        '/learn/api/public/v1/courses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV2CoursesCourseIdDelete operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesCourseIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Course
     * Deletes a course or organization in synchronous fashion.  The &#x27;system.course.DELETE&#x27; entitlement is needed to delete a course, while &#x27;system.org.DELETE&#x27; is needed for an organization.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesCourseIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    learnApiPublicV2CoursesCourseIdDelete(courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'removeFiles': opts['removeFiles']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/learn/api/public/v2/courses/{courseId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV2CoursesCourseIdGet operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesCourseIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CourseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Course
     * Loads a specific course or organization.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users with no access to the course only have read access to the following properties:  - id - courseId - name - description - organization - closedComplete - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesCourseIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CourseV2}
     */
    learnApiPublicV2CoursesCourseIdGet(courseId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CourseV2;

      return this.apiClient.callApi(
        '/learn/api/public/v2/courses/{courseId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV2CoursesCourseIdPatch operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesCourseIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CourseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Course
     * Updates a course or organization.  To update a course, the user must have either &#x27;system.course|org.properties.MODIFY&#x27; or &#x27;course.configure-properties.EXECUTE&#x27; entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below:    | Field                           | Entitlements Required                                                  |  |---------------------------------|------------------------------------------------------------------------|  | name                            | course.name.MODIFY                                                     |  | description                     | course.name.MODIFY                                                     |  | allowGuests                     | course.configure-guest-access.EXECUTE                                  |  | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |  | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |  | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |  | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |  | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |    **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesCourseIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CourseV2}
     */
    learnApiPublicV2CoursesCourseIdPatch(body, courseId, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'courseId': courseId
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CourseV2;

      return this.apiClient.callApi(
        '/learn/api/public/v2/courses/{courseId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV2CoursesGet operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20030} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Courses
     * Returns a list of courses and organizations.  To view disabled courses a user must have the entitlement &#x27;system.course.VIEW&#x27;.  Users with the &#x27;course.configure-properties.EXECUTE&#x27; course entitlement, or the &#x27;system.course.properties.MODIFY&#x27; system entitlement can access all course properties.  Users enrolled in the course have read access to all properties except:  - uuid - externalId - dataSourceId - created - allowGuests - enrollment.accessCode  Users who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:  - id - courseId - name - description - organization - readOnly - termId - availability.available - availability.duration.type - availability.duration.start - availability.duration.end - availability.duration.daysOfUse If the course enrollment is self-enroll, all users can view the course as though they were enrolled.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20030}
     */
    learnApiPublicV2CoursesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'modified': opts['modified'],
        'modifiedCompare': opts['modifiedCompare'],
        'courseId': opts['courseId'],
        'name': opts['name'],
        'description': opts['description'],
        'externalId': opts['externalId'],
        'created': opts['created'],
        'allowGuests': opts['allowGuests'],
        'createdCompare': opts['createdCompare'],
        'availability.available': opts['availabilityAvailable'],
        'dataSourceId': opts['dataSourceId'],
        'termId': opts['termId'],
        'organization': opts['organization'],
        'sort': opts['sort'],
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20030;

      return this.apiClient.callApi(
        '/learn/api/public/v2/courses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the learnApiPublicV2CoursesPost operation.
     * @callback module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CourseV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Course
     * Creates a course or organization.  The &#x27;system.course.CREATE&#x27; entitlement is needed to create a course, while &#x27;system.org.CREATE&#x27; is needed for an organization.  **Since**: 3400.8.0  **Deprecated**: since 3800.1.0; use the v3 end-point instead
     * @param {Object} opts Optional parameters
     * @param {module:api/DeprecatedCoursesApi~learnApiPublicV2CoursesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CourseV2}
     */
    learnApiPublicV2CoursesPost(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
        'fields': opts['fields']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CourseV2;

      return this.apiClient.callApi(
        '/learn/api/public/v2/courses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
