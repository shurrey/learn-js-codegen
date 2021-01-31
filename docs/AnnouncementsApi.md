# LearnApIs.AnnouncementsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1AnnouncementsAnnouncementIdDelete**](AnnouncementsApi.md#learnApiPublicV1AnnouncementsAnnouncementIdDelete) | **DELETE** /learn/api/public/v1/announcements/{announcementId} | Delete Announcement
[**learnApiPublicV1AnnouncementsAnnouncementIdGet**](AnnouncementsApi.md#learnApiPublicV1AnnouncementsAnnouncementIdGet) | **GET** /learn/api/public/v1/announcements/{announcementId} | Get Announcement
[**learnApiPublicV1AnnouncementsAnnouncementIdPatch**](AnnouncementsApi.md#learnApiPublicV1AnnouncementsAnnouncementIdPatch) | **PATCH** /learn/api/public/v1/announcements/{announcementId} | Update Announcement
[**learnApiPublicV1AnnouncementsGet**](AnnouncementsApi.md#learnApiPublicV1AnnouncementsGet) | **GET** /learn/api/public/v1/announcements | Get Announcements
[**learnApiPublicV1AnnouncementsPost**](AnnouncementsApi.md#learnApiPublicV1AnnouncementsPost) | **POST** /learn/api/public/v1/announcements | Create Announcement

<a name="learnApiPublicV1AnnouncementsAnnouncementIdDelete"></a>
# **learnApiPublicV1AnnouncementsAnnouncementIdDelete**
> learnApiPublicV1AnnouncementsAnnouncementIdDelete(announcementId, opts)

Delete Announcement

Delete a System Announcement. Users with the &#x27;system.announcements.DELETE&#x27; entitlement can delete System Announcements.  **Since**: 3100.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.AnnouncementsApi();
let announcementId = "announcementId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1AnnouncementsAnnouncementIdDelete(announcementId, opts, (error, data, response) => {
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
 **announcementId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1AnnouncementsAnnouncementIdGet"></a>
# **learnApiPublicV1AnnouncementsAnnouncementIdGet**
> Announcement learnApiPublicV1AnnouncementsAnnouncementIdGet(announcementId, opts)

Get Announcement

Get a System Announcement. Users with the &#x27;system.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; System Announcements. Users with the &#x27;system.announcements.admin.VIEW&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; System Announcements.  **Since**: 3100.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.AnnouncementsApi();
let announcementId = "announcementId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1AnnouncementsAnnouncementIdGet(announcementId, opts, (error, data, response) => {
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
 **announcementId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Announcement**](Announcement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1AnnouncementsAnnouncementIdPatch"></a>
# **learnApiPublicV1AnnouncementsAnnouncementIdPatch**
> Announcement learnApiPublicV1AnnouncementsAnnouncementIdPatch(bodyannouncementId, opts)

Update Announcement

Update a System Announcement. Users with the &#x27;system.announcements.MODIFY&#x27; entitlement can update System Announcements.  **Since**: 3100.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.AnnouncementsApi();
let body = new LearnApIs.Body1(); // Body1 | 
let announcementId = "announcementId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1AnnouncementsAnnouncementIdPatch(bodyannouncementId, opts, (error, data, response) => {
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
 **body** | [**Body1**](Body1.md)|  | 
 **announcementId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Announcement**](Announcement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1AnnouncementsGet"></a>
# **learnApiPublicV1AnnouncementsGet**
> InlineResponse200 learnApiPublicV1AnnouncementsGet(opts)

Get Announcements

Return a list of System Announcements. Users with the &#x27;system.announcements.VIEW&#x27; entitlement can view &#x27;available&#x27; System Announcements. Users with the &#x27;system.announcements.admin.VIEW&#x27; entitlement can view &#x27;available&#x27; &amp; &#x27;unavailable&#x27; System Announcements.  **Since**: 3100.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.AnnouncementsApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1AnnouncementsGet(opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1AnnouncementsPost"></a>
# **learnApiPublicV1AnnouncementsPost**
> Announcement learnApiPublicV1AnnouncementsPost(body, opts)

Create Announcement

Create a System Announcement. Users with the &#x27;system.announcements.CREATE&#x27; entitlement can create System Announcements.  **Since**: 3100.7.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.AnnouncementsApi();
let body = new LearnApIs.Body(); // Body | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1AnnouncementsPost(body, opts, (error, data, response) => {
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
 **body** | [**Body**](Body.md)|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**Announcement**](Announcement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

