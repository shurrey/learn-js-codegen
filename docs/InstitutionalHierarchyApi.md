# LearnApIs.InstitutionalHierarchyApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdNodesGet**](InstitutionalHierarchyApi.md#learnApiPublicV1CoursesCourseIdNodesGet) | **GET** /learn/api/public/v1/courses/{courseId}/nodes | Get Associated Nodes
[**learnApiPublicV1InstitutionalHierarchyNodesGet**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesGet) | **GET** /learn/api/public/v1/institutionalHierarchy/nodes | Get Nodes
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenGet**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenGet) | **GET** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/children | Get Node Children
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenPost**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenPost) | **POST** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/children | Create Child Node
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdDelete**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdDelete) | **DELETE** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId} | Delete Node Course Association
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPatch**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPatch) | **PATCH** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId} | Update Node Course Association
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPut**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPut) | **PUT** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId} | Create Node Course Association
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesGet**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesGet) | **GET** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses | Get Node Course Associations
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdDelete**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdDelete) | **DELETE** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId} | Delete Node
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdGet**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdGet) | **GET** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId} | Get Node
[**learnApiPublicV1InstitutionalHierarchyNodesNodeIdPatch**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesNodeIdPatch) | **PATCH** /learn/api/public/v1/institutionalHierarchy/nodes/{nodeId} | Update Node
[**learnApiPublicV1InstitutionalHierarchyNodesPost**](InstitutionalHierarchyApi.md#learnApiPublicV1InstitutionalHierarchyNodesPost) | **POST** /learn/api/public/v1/institutionalHierarchy/nodes | Create Node

<a name="learnApiPublicV1CoursesCourseIdNodesGet"></a>
# **learnApiPublicV1CoursesCourseIdNodesGet**
> InlineResponse20032 learnApiPublicV1CoursesCourseIdNodesGet(courseId, opts)

Get Associated Nodes

Obtains a list of nodes to which a given course is directly associated.  Users with the &#x27;system.multiinst.node.course.association.VIEW&#x27; entitlement and the &#x27;system.multiinst.node.org.association.VIEW&#x27; system entitlement can access all node association information.  **Since**: 3800.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>node</li></ul>
};
apiInstance.learnApiPublicV1CoursesCourseIdNodesGet(courseId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;node&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesGet"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesGet**
> InlineResponse20033 learnApiPublicV1InstitutionalHierarchyNodesGet(opts)

Get Nodes

Returns the Top-level institutional hierarchy nodes  Entitlement system.multiinst.hierarchy.manager.VIEW required  Users with entitlement \&quot;system.multiinst.hierarchy.manager.VIEW\&quot; for Node management can view all fields.  **Since**: 3800.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'recursive': true, // Boolean | Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)  **Since**: 3800.14.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **recursive** | **Boolean**| Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)  **Since**: 3800.14.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenGet"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenGet**
> InlineResponse20033 learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenGet(nodeId, opts)

Get Node Children

Returns the children of the institutional hierarchy node corresponding to the provided ID  Entitlement system.multiinst.hierarchy.manager.VIEW required  Users with entitlement \&quot;system.multiinst.hierarchy.manager.VIEW\&quot; for Node management can view all fields.  **Since**: 3800.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'recursive': true, // Boolean | Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)  **Since**: 3800.14.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenGet(nodeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **recursive** | **Boolean**| Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)  **Since**: 3800.14.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenPost"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenPost**
> Node learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenPost(bodynodeId, opts)

Create Child Node

Create a new institutional hierarchy node whose parent corresponds to the supplied nodeId  Entitlement system.multiinst.hierarchy.manager.CREATE required  Users with entitlement \&quot;system.multiinst.hierarchy.manager.CREATE\&quot; for Node management can create a new Node.  **Since**: 3800.15.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let body = new LearnApIs.Body49(); // Body49 | 
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdChildrenPost(bodynodeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body49**](Body49.md)|  | 
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdDelete"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdDelete**
> learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdDelete(nodeId, courseId)

Delete Node Course Association

Deletes the association between a given Node and a Course  Entitlement system.multiinst.node.course.association.DELETE required to delete Node-Course associations Entitlement system.multiinst.node.org.association.DELETE required to delete Node-Organization associations  **Since**: 3800.17.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  

apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdDelete(nodeId, courseId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPatch"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPatch**
> HierarchyNodeCourse learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPatch(bodynodeIdcourseId, opts)

Update Node Course Association

Update a specified node-course association.  Users with the &#x27;system.multiinst.node.course.association.CREATE&#x27; entitlement can update Course - Hierarchy Node associations Users with the &#x27;system.multiinst.node.org.association.CREATE&#x27; entitlement can update Organization - Hierarchy Node associations  **Since**: 3800.17.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let body = new LearnApIs.Body51(); // Body51 | 
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPatch(bodynodeIdcourseId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body51**](Body51.md)|  | 
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**HierarchyNodeCourse**](HierarchyNodeCourse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPut"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPut**
> HierarchyNodeCourse learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPut(bodynodeIdcourseId, opts)

Create Node Course Association

Creates a node-course relationship for the specified node and course.  Users with the &#x27;system.multiinst.node.course.association.CREATE&#x27; entitlement can create Course - Hierarchy Node associations. Users with the &#x27;system.multiinst.node.org.association.CREATE&#x27; entitlement can create Organization - Hierarchy Node associations  **Since**: 3800.17.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let body = new LearnApIs.Body50(); // Body50 | 
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesCourseIdPut(bodynodeIdcourseId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body50**](Body50.md)|  | 
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**HierarchyNodeCourse**](HierarchyNodeCourse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesGet"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesGet**
> InlineResponse20034 learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesGet(nodeId, opts)

Get Node Course Associations

Returns a list of node-course relationships for the specified node.  Users with the &#x27;system.multiinst.node.course.association.VIEW&#x27; entitlement and the &#x27;system.multiinst.node.org.association.VIEW&#x27; system entitlement can access all node association information.  **Since**: 3800.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'courseOrganization': true, // Boolean | Filters Hierarchy Node associations based on whether it is a Node-Course or a Node-Organization association. A value of 'true' indicates that search results should be limited to Node-Organization associations. A value of 'false' indicates results should be limited to Node-Course associations. Not setting this field indicates that both Node-Course and Node-Organization associations should be returned.
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdCoursesGet(nodeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **courseOrganization** | **Boolean**| Filters Hierarchy Node associations based on whether it is a Node-Course or a Node-Organization association. A value of &#x27;true&#x27; indicates that search results should be limited to Node-Organization associations. A value of &#x27;false&#x27; indicates results should be limited to Node-Course associations. Not setting this field indicates that both Node-Course and Node-Organization associations should be returned. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;course&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdDelete"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdDelete**
> learnApiPublicV1InstitutionalHierarchyNodesNodeIdDelete(nodeId)

Delete Node

Deletes an institutional hierarchy node. The root node cannot be deleted. This deletes orphan children in a cascading fashion.  The &#x27;system.multiinst.hierarchy.manager.DELETE&#x27; entitlement is required.  **Since**: 3800.15.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    

apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdDelete(nodeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdGet"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdGet**
> Node learnApiPublicV1InstitutionalHierarchyNodesNodeIdGet(nodeId, opts)

Get Node

Returns the institutional hierarchy node corresponding the provided ID  Entitlement system.multiinst.hierarchy.manager.VIEW required  Users with entitlement \&quot;system.multiinst.hierarchy.manager.VIEW\&quot; for Node management can view all fields.  **Since**: 3800.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdGet(nodeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesNodeIdPatch"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesNodeIdPatch**
> Node learnApiPublicV1InstitutionalHierarchyNodesNodeIdPatch(bodynodeId, opts)

Update Node

Updates Institutional Hierarchy Node information.  Entitlement system.multiinst.hierarchy.manager.MODIFY is required  **Since**: 3800.15.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let body = new LearnApIs.Body48(); // Body48 | 
let nodeId = "nodeId_example"; // String | The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |    
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesNodeIdPatch(bodynodeId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body48**](Body48.md)|  | 
 **nodeId** | **String**| The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:breakfastClub              |     | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1InstitutionalHierarchyNodesPost"></a>
# **learnApiPublicV1InstitutionalHierarchyNodesPost**
> Node learnApiPublicV1InstitutionalHierarchyNodesPost(body, opts)

Create Node

Creates a new institutional hierarchy node  Entitlement system.multiinst.hierarchy.manager.CREATE required  Users with entitlement \&quot;system.multiinst.hierarchy.manager.CREATE\&quot; for Node management can create a new Node.  **Since**: 3800.15.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.InstitutionalHierarchyApi();
let body = new LearnApIs.Body47(); // Body47 | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1InstitutionalHierarchyNodesPost(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body47**](Body47.md)|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

