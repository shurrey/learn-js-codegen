# LearnApIs.CourseMessagesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdMessagesFoldersGet**](CourseMessagesApi.md#learnApiPublicV1CoursesCourseIdMessagesFoldersGet) | **GET** /learn/api/public/v1/courses/{courseId}/messages/folders | Get Folders
[**learnApiPublicV1CoursesCourseIdMessagesGet**](CourseMessagesApi.md#learnApiPublicV1CoursesCourseIdMessagesGet) | **GET** /learn/api/public/v1/courses/{courseId}/messages | Get Messages
[**learnApiPublicV1CoursesCourseIdMessagesMessageIdDelete**](CourseMessagesApi.md#learnApiPublicV1CoursesCourseIdMessagesMessageIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/messages/{messageId} | Delete Message
[**learnApiPublicV1CoursesCourseIdMessagesMessageIdParticipantsGet**](CourseMessagesApi.md#learnApiPublicV1CoursesCourseIdMessagesMessageIdParticipantsGet) | **GET** /learn/api/public/v1/courses/{courseId}/messages/{messageId}/participants | Get Message Participants
[**learnApiPublicV1CoursesCourseIdMessagesMessageIdPatch**](CourseMessagesApi.md#learnApiPublicV1CoursesCourseIdMessagesMessageIdPatch) | **PATCH** /learn/api/public/v1/courses/{courseId}/messages/{messageId} | Update Message
[**learnApiPublicV1CoursesCourseIdMessagesPost**](CourseMessagesApi.md#learnApiPublicV1CoursesCourseIdMessagesPost) | **POST** /learn/api/public/v1/courses/{courseId}/messages | Create Message

<a name="learnApiPublicV1CoursesCourseIdMessagesFoldersGet"></a>
# **learnApiPublicV1CoursesCourseIdMessagesFoldersGet**
> InlineResponse20027 learnApiPublicV1CoursesCourseIdMessagesFoldersGet(courseId, opts)

Get Folders

Retrieve all the folders for a course. This endpoint currently supports only Original courses.  The \&quot;course.message.VIEW\&quot; entitlement is required to view a Course Message folders.  **Since**: 3900.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMessagesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56 // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
};
apiInstance.learnApiPublicV1CoursesCourseIdMessagesFoldersGet(courseId, opts, (error, data, response) => {
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

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdMessagesGet"></a>
# **learnApiPublicV1CoursesCourseIdMessagesGet**
> InlineResponse20026 learnApiPublicV1CoursesCourseIdMessagesGet(courseId, opts)

Get Messages

Retrieve all the messages for a course by specified folder. This endpoint currently supports only Original courses.  The \&quot;course.message.VIEW\&quot; entitlement is required to view Course Messages.  **Since**: 3900.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMessagesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'folderType': "folderType_example", // String | Specifies the folder type, The default type is inbox   | Type      | Description  | --------- | --------- | | Inbox |  | | Sent |  | | Delete |  | | Custom |  | 
  'folderName': "folderName_example", // String | Specifies the folder name of the custom folder
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"isRead(desc),start\" Supported fields are:  - isRead - postedDate  **Since**: 3900.2.0
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>sender</li></ul>
};
apiInstance.learnApiPublicV1CoursesCourseIdMessagesGet(courseId, opts, (error, data, response) => {
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
 **folderType** | **String**| Specifies the folder type, The default type is inbox   | Type      | Description  | --------- | --------- | | Inbox |  | | Sent |  | | Delete |  | | Custom |  |  | [optional] 
 **folderName** | **String**| Specifies the folder name of the custom folder | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;isRead(desc),start\&quot; Supported fields are:  - isRead - postedDate  **Since**: 3900.2.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;sender&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdMessagesMessageIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdMessagesMessageIdDelete**
> learnApiPublicV1CoursesCourseIdMessagesMessageIdDelete(courseId, messageId, opts)

Delete Message

Delete a message.  The &#x27;course.message.DELETE&#x27; entitlement is required to delete the message.  **Since**: 3900.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMessagesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let messageId = "messageId_example"; // String | 
let opts = { 
  'folderType': "folderType_example", // String | Specifies the folder type, The default type is inbox   | Type      | Description  | --------- | --------- | | Inbox |  | | Sent |  | | Delete |  | | Custom |  | 
  'folderName': "folderName_example" // String | Specifies the folder name of the custom folder
};
apiInstance.learnApiPublicV1CoursesCourseIdMessagesMessageIdDelete(courseId, messageId, opts, (error, data, response) => {
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
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **messageId** | **String**|  | 
 **folderType** | **String**| Specifies the folder type, The default type is inbox   | Type      | Description  | --------- | --------- | | Inbox |  | | Sent |  | | Delete |  | | Custom |  |  | [optional] 
 **folderName** | **String**| Specifies the folder name of the custom folder | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdMessagesMessageIdParticipantsGet"></a>
# **learnApiPublicV1CoursesCourseIdMessagesMessageIdParticipantsGet**
> InlineResponse20028 learnApiPublicV1CoursesCourseIdMessagesMessageIdParticipantsGet(courseId, messageId, opts)

Get Message Participants

Retrieve all participants for the specified message.  The \&quot;course.message.VIEW\&quot; entitlement is required to view a Course Message participants.  **Since**: 3900.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMessagesApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let messageId = "messageId_example"; // String | 
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'participationType': "participationType_example", // String | Search the participation type  **Since**: 3800.20.0
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"PARTICIPATION_TYPE(desc),start\" Supported fields are:  - participationType  **Since**: 3900.2.0
  'fields': "fields_example", // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
  'expand': "expand_example" // String | A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>
};
apiInstance.learnApiPublicV1CoursesCourseIdMessagesMessageIdParticipantsGet(courseId, messageId, opts, (error, data, response) => {
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
 **messageId** | **String**|  | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **participationType** | **String**| Search the participation type  **Since**: 3800.20.0 | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;PARTICIPATION_TYPE(desc),start\&quot; Supported fields are:  - participationType  **Since**: 3900.2.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 
 **expand** | **String**| A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:&lt;br&gt;&lt;ul&gt;&lt;li&gt;user&lt;/li&gt;&lt;/ul&gt; | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdMessagesMessageIdPatch"></a>
# **learnApiPublicV1CoursesCourseIdMessagesMessageIdPatch**
> CourseMessage learnApiPublicV1CoursesCourseIdMessagesMessageIdPatch(bodycourseIdmessageId, opts)

Update Message

Update the read status of the message. This endpoint currently supports only Original courses.  **Since**: 3900.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMessagesApi();
let body = new LearnApIs.Body41(); // Body41 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let messageId = "messageId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdMessagesMessageIdPatch(bodycourseIdmessageId, opts, (error, data, response) => {
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
 **body** | [**Body41**](Body41.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **messageId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseMessage**](CourseMessage.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdMessagesPost"></a>
# **learnApiPublicV1CoursesCourseIdMessagesPost**
> CourseMessage learnApiPublicV1CoursesCourseIdMessagesPost(bodycourseId, opts)

Create Message

Creates a new Course Message. This endpoint currently supports only Original courses.  The \&quot;course.message.CREATE\&quot; entitlement is required to create or reply a course message  **Since**: 3900.2.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.CourseMessagesApi();
let body = new LearnApIs.Body40(); // Body40 | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdMessagesPost(bodycourseId, opts, (error, data, response) => {
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
 **body** | [**Body40**](Body40.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**CourseMessage**](CourseMessage.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

