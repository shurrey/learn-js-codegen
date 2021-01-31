# LearnApIs.SystemApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1SystemPoliciesPrivacyGet**](SystemApi.md#learnApiPublicV1SystemPoliciesPrivacyGet) | **GET** /learn/api/public/v1/system/policies/privacy | Get Policies
[**learnApiPublicV1SystemTasksTaskIdGet**](SystemApi.md#learnApiPublicV1SystemTasksTaskIdGet) | **GET** /learn/api/public/v1/system/tasks/{taskId} | Get System Task
[**learnApiPublicV1SystemVersionGet**](SystemApi.md#learnApiPublicV1SystemVersionGet) | **GET** /learn/api/public/v1/system/version | Get Version

<a name="learnApiPublicV1SystemPoliciesPrivacyGet"></a>
# **learnApiPublicV1SystemPoliciesPrivacyGet**
> PrivacyPolicy learnApiPublicV1SystemPoliciesPrivacyGet(opts)

Get Policies

Returns the links to the Blackboard and Institution privacy policies  **Since**: 3400.5.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.SystemApi();
let opts = { 
  'locale': "locale_example" // String | the locale, otherwise it defaults to en_US
};
apiInstance.learnApiPublicV1SystemPoliciesPrivacyGet(opts, (error, data, response) => {
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
 **locale** | **String**| the locale, otherwise it defaults to en_US | [optional] 

### Return type

[**PrivacyPolicy**](PrivacyPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1SystemTasksTaskIdGet"></a>
# **learnApiPublicV1SystemTasksTaskIdGet**
> SystemTask learnApiPublicV1SystemTasksTaskIdGet(taskId, opts)

Get System Task

Get the background task by the given task Id.  **Since**: 3800.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.SystemApi();
let taskId = "taskId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1SystemTasksTaskIdGet(taskId, opts, (error, data, response) => {
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
 **taskId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**SystemTask**](SystemTask.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1SystemVersionGet"></a>
# **learnApiPublicV1SystemVersionGet**
> VersionInfo learnApiPublicV1SystemVersionGet()

Get Version

Gets the current Learn server version.  **Since**: 3000.3.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.SystemApi();
apiInstance.learnApiPublicV1SystemVersionGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VersionInfo**](VersionInfo.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

