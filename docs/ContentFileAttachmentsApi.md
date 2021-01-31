# LearnApIs.ContentFileAttachmentsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDelete**](ContentFileAttachmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDelete) | **DELETE** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId} | Delete File Attachment
[**learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDownloadGet**](ContentFileAttachmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDownloadGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId}/download | Download
[**learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdGet**](ContentFileAttachmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId} | Get File Attachment
[**learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsGet**](ContentFileAttachmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsGet) | **GET** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments | Get File Attachments
[**learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsPost**](ContentFileAttachmentsApi.md#learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsPost) | **POST** /learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments | Create File Attachment

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDelete"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDelete**
> learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDelete(courseId, contentId, attachmentId)

Delete File Attachment

Delete file attachment meta data by attachment ID  Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) for a Classic Course  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentFileAttachmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let attachmentId = "attachmentId_example"; // String | 

apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDelete(courseId, contentId, attachmentId, (error, data, response) => {
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
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **attachmentId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDownloadGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDownloadGet**
> learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDownloadGet(courseId, contentId, attachmentId)

Download

Download the contents of a Content Item.  Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course  **Since**: 3200.8.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentFileAttachmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let attachmentId = "attachmentId_example"; // String | 

apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdDownloadGet(courseId, contentId, attachmentId, (error, data, response) => {
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
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **attachmentId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdGet**
> FileAttachment learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdGet(courseId, contentId, attachmentId, opts)

Get File Attachment

Get the file attachment meta data by an attachment ID  Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course  **Since**: 3200.8.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentFileAttachmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let attachmentId = "attachmentId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsAttachmentIdGet(courseId, contentId, attachmentId, opts, (error, data, response) => {
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
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **attachmentId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**FileAttachment**](FileAttachment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsGet"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsGet**
> InlineResponse2006 learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsGet(courseId, contentId, opts)

Get File Attachments

Get the file attachment meta data associated to the Content Item  Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course  **Since**: 3200.8.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentFileAttachmentsApi();
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56 // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
};
apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsGet(courseId, contentId, opts, (error, data, response) => {
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
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsPost"></a>
# **learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsPost**
> FileAttachment learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsPost(bodycourseIdcontentId)

Create File Attachment

Attach an uploaded file to a Content item.  Supported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) for a Classic Course  **Since**: 3400.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.ContentFileAttachmentsApi();
let body = null; // Object | 
let courseId = "courseId_example"; // String | The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |  
let contentId = "contentId_example"; // String | The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |  

apiInstance.learnApiPublicV1CoursesCourseIdContentsContentIdAttachmentsPost(bodycourseIdcontentId, (error, data, response) => {
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
 **body** | [**Object**](Object.md)|  | 
 **courseId** | **String**| The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | externalId | externalId:math101                    |  | courseId   | courseId:math101                      |  | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |   | 
 **contentId** | **String**| The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root.    | ID type    | Example                               |  |------------|---------------------------------------|  | primary    | _123_1                                |  | keyword    | root                                  |   | 

### Return type

[**FileAttachment**](FileAttachment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

