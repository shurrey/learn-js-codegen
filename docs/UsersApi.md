# LearnApIs.UsersApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1UsersGet**](UsersApi.md#learnApiPublicV1UsersGet) | **GET** /learn/api/public/v1/users | Get Users
[**learnApiPublicV1UsersPost**](UsersApi.md#learnApiPublicV1UsersPost) | **POST** /learn/api/public/v1/users | Create User
[**learnApiPublicV1UsersUserIdAvatarGet**](UsersApi.md#learnApiPublicV1UsersUserIdAvatarGet) | **GET** /learn/api/public/v1/users/{userId}/avatar | Get User Avatar
[**learnApiPublicV1UsersUserIdDelete**](UsersApi.md#learnApiPublicV1UsersUserIdDelete) | **DELETE** /learn/api/public/v1/users/{userId} | Delete User
[**learnApiPublicV1UsersUserIdGet**](UsersApi.md#learnApiPublicV1UsersUserIdGet) | **GET** /learn/api/public/v1/users/{userId} | Get User
[**learnApiPublicV1UsersUserIdObserveesGet**](UsersApi.md#learnApiPublicV1UsersUserIdObserveesGet) | **GET** /learn/api/public/v1/users/{userId}/observees | Get Observees
[**learnApiPublicV1UsersUserIdObserversGet**](UsersApi.md#learnApiPublicV1UsersUserIdObserversGet) | **GET** /learn/api/public/v1/users/{userId}/observers | Get Observers
[**learnApiPublicV1UsersUserIdObserversObserverIdDelete**](UsersApi.md#learnApiPublicV1UsersUserIdObserversObserverIdDelete) | **DELETE** /learn/api/public/v1/users/{userId}/observers/{observerId} | Delete Observer
[**learnApiPublicV1UsersUserIdObserversObserverIdPut**](UsersApi.md#learnApiPublicV1UsersUserIdObserversObserverIdPut) | **PUT** /learn/api/public/v1/users/{userId}/observers/{observerId} | Create Observer
[**learnApiPublicV1UsersUserIdPatch**](UsersApi.md#learnApiPublicV1UsersUserIdPatch) | **PATCH** /learn/api/public/v1/users/{userId} | Update User
[**learnApiPublicV1UsersUserIdSessionsGet**](UsersApi.md#learnApiPublicV1UsersUserIdSessionsGet) | **GET** /learn/api/public/v1/users/{userId}/sessions | Get Current Active User By Id

<a name="learnApiPublicV1UsersGet"></a>
# **learnApiPublicV1UsersGet**
> InlineResponse20045 learnApiPublicV1UsersGet(opts)

Get Users

Returns a list of users.  At least one of the entitlements &#x27;system.user.VIEW&#x27; or &#x27;user.VIEW&#x27; are needed.  Note: Users with the &#x27;SystemAdmin&#x27; role are only included in the results if the logged on user also has this role.  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'userName': "userName_example", // String | Search for users with userName properties that contain this value.  **Since**: 3000.11.0
  'externalId': "externalId_example", // String | Search for users with externalId properties that contain this value.  **Since**: 3000.11.0
  'created': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for users with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.  **Since**: 3000.11.0
  'modified': new Date("2013-10-20T19:20:30+01:00"), // Date | Search for users with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.  **Since**: 3700.1.0
  'createdCompare': "createdCompare_example", // String | Used alongside the 'created' search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3000.11.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'modifiedCompare': "modifiedCompare_example", // String | Used alongside the 'modifiedDate' search parameter.  Supported values:  - lessThan - greaterOrEqual Defaults to greaterOrEqual if not specified.   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  | 
  'dataSourceId': "dataSourceId_example", // String | Search for users with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".  **Since**: 3000.11.0
  'nameFamily': "nameFamily_example", // String | Search for users with name.family properties that contain this value.  **Since**: 3000.11.0
  'availabilityAvailable': "availabilityAvailable_example", // String | Search for users with availability.available properties that contain this value.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | Disabled |   **Since**: 3100.0.0 | 
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\" Supported fields are:  - userName - name.family - externalId - dataSourceId - created  **Since**: 3100.0.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersGet(opts, (error, data, response) => {
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
 **userName** | **String**| Search for users with userName properties that contain this value.  **Since**: 3000.11.0 | [optional] 
 **externalId** | **String**| Search for users with externalId properties that contain this value.  **Since**: 3000.11.0 | [optional] 
 **created** | **Date**| Search for users with a created date relative to this value.  &#x27;createdCompare&#x27; may also be sent to control search behavior.  **Since**: 3000.11.0 | [optional] 
 **modified** | **Date**| Search for users with a modified date relative to this value.  &#x27;modifiedCompare&#x27; may also be sent to control search behavior.  **Since**: 3700.1.0 | [optional] 
 **createdCompare** | **String**| Used alongside the &#x27;created&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual  Defaults to greaterOrEqual if not specified.  **Since**: 3000.11.0   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **modifiedCompare** | **String**| Used alongside the &#x27;modifiedDate&#x27; search parameter.  Supported values:  - lessThan - greaterOrEqual Defaults to greaterOrEqual if not specified.   | Type      | Description  | --------- | --------- | | lessThan |  | | greaterOrEqual |  |  | [optional] 
 **dataSourceId** | **String**| Search for users with this dataSourceId.  This may optionally be the data source&#x27;s externalId using the syntax \&quot;externalId:math101\&quot;.  **Since**: 3000.11.0 | [optional] 
 **nameFamily** | **String**| Search for users with name.family properties that contain this value.  **Since**: 3000.11.0 | [optional] 
 **availabilityAvailable** | **String**| Search for users with availability.available properties that contain this value.  **Since**: 3100.0.0   | Type      | Description  | --------- | --------- | | Yes |  | | No |  | | Disabled |   **Since**: 3100.0.0 |  | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name.family(desc),created\&quot; Supported fields are:  - userName - name.family - externalId - dataSourceId - created  **Since**: 3100.0.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersPost"></a>
# **learnApiPublicV1UsersPost**
> User learnApiPublicV1UsersPost(body, opts)

Create User

Creates a user.  The &#x27;system.user.CREATE&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let body = new LearnApIs.Body58(); // Body58 | JSON input object.
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersPost(body, opts, (error, data, response) => {
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
 **body** | [**Body58**](Body58.md)| JSON input object. | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdAvatarGet"></a>
# **learnApiPublicV1UsersUserIdAvatarGet**
> learnApiPublicV1UsersUserIdAvatarGet(userId)

Get User Avatar

Gets a user&#x27;s avatar image.  The response is an HTTP redirect rather then image raw data. It is up to the caller of the api to follow the redirect and download the image.  The redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user&#x27;s resource.  **Since**: 3800.10.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  

apiInstance.learnApiPublicV1UsersUserIdAvatarGet(userId, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdDelete"></a>
# **learnApiPublicV1UsersUserIdDelete**
> learnApiPublicV1UsersUserIdDelete(userId, opts)

Delete User

Deletes a user.  The &#x27;system.user.DELETE&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdDelete(userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdGet"></a>
# **learnApiPublicV1UsersUserIdGet**
> User learnApiPublicV1UsersUserIdGet(userId, opts)

Get User

Loads a user.  Properties returned will depend on the caller&#x27;s entitlements.  Callers with the entitlement &#x27;user.VIEW&#x27; will always get a minimal set of core properties:  - id - name.given - name.family - name.middle - systemRoleIds  Depending on the Learn administrator customizable user field display settings, as well as the target user&#x27;s personal visibility settings, the following fields might also be included:  - userName - educationLevel - gender - birthDate - name.other - name.suffix - name.title - job.* - contact.* - address.*  Callers asking for their own user record get all fields listed above, plus:  - locale.*  All user properties are provided to callers with one of the entitlements &#x27;system.user.properties.MODIFY&#x27;, &#x27;system.useradmin.generic.VIEW&#x27;, or &#x27;system.user.VIEW&#x27;.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdGet(userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdObserveesGet"></a>
# **learnApiPublicV1UsersUserIdObserveesGet**
> InlineResponse20045 learnApiPublicV1UsersUserIdObserveesGet(userId, opts)

Get Observees

Returns a list of users being observed by a given user.  The &#x27;observer.associations.VIEW&#x27; entitlement is needed as well as being able to view the provided user.  **Since**: 3500.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdObserveesGet(userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdObserversGet"></a>
# **learnApiPublicV1UsersUserIdObserversGet**
> InlineResponse20045 learnApiPublicV1UsersUserIdObserversGet(userId, opts)

Get Observers

Returns a list of users observing a given user.  The &#x27;observer.associations.VIEW&#x27; entitlement is needed as well as being able to view the provided user.  **Since**: 3500.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdObserversGet(userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdObserversObserverIdDelete"></a>
# **learnApiPublicV1UsersUserIdObserversObserverIdDelete**
> learnApiPublicV1UsersUserIdObserversObserverIdDelete(userId, observerId, opts)

Delete Observer

Removes an observer/observee association.  The &#x27;system.observer_user.DELETE&#x27; entitlement is needed as well as being able to view the provided users.  **Since**: 3500.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let observerId = "observerId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |    **Since**: 3500.5.0
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdObserversObserverIdDelete(userId, observerId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **observerId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |    **Since**: 3500.5.0 | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdObserversObserverIdPut"></a>
# **learnApiPublicV1UsersUserIdObserversObserverIdPut**
> User learnApiPublicV1UsersUserIdObserversObserverIdPut(userId, observerId, opts)

Create Observer

Creates an observer/observee association. The user identified by userId must not have the OBSERVER system role. Similarly, the user identified by observerId must have the OBSERVER system role.  The &#x27;system.observer_user.CREATE&#x27; entitlement is needed as well as being able to view the provided users.  **Since**: 3500.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let observerId = "observerId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |    **Since**: 3500.5.0
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdObserversObserverIdPut(userId, observerId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **observerId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |    **Since**: 3500.5.0 | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdPatch"></a>
# **learnApiPublicV1UsersUserIdPatch**
> User learnApiPublicV1UsersUserIdPatch(bodyuserId, opts)

Update User

Updates a user.  Callers may update their own user record if they have the &#x27;self.user.MODIFY&#x27; entitlement.  Updating other users requires the &#x27;system.user.properties.MODIFY&#x27; entitlement.  Certain properties may be edited by callers with more finely grained entitlements:    | Field                  | Entitlements Required                               |  |------------------------|-----------------------------------------------------|  | systemRoleIds          | system.user.MODIFY, system.user-system-role.MODIFY  |  | availability.available | system.user.MODIFY, system.user.availability.MODIFY |  | password               | system.user.MODIFY, system.user-password.MODIFY     |    **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let body = new LearnApIs.Body59(); // Body59 | JSON input object.
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdPatch(bodyuserId, opts, (error, data, response) => {
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
 **body** | [**Body59**](Body59.md)| JSON input object. | 
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1UsersUserIdSessionsGet"></a>
# **learnApiPublicV1UsersUserIdSessionsGet**
> InlineResponse20042 learnApiPublicV1UsersUserIdSessionsGet(userId, opts)

Get Current Active User By Id

Displays active session information for a specific user.  The entitlement system.user.sessions.VIEW is needed to request a user&#x27;s active sessions.  **Since**: 3800.4.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UsersApi();
let userId = "userId_example"; // String | The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UsersUserIdSessionsGet(userId, opts, (error, data, response) => {
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
 **userId** | **String**| The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:jsmith                     |  | userName   | userName:jsmith                       |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

