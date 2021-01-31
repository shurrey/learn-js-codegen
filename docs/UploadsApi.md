# LearnApIs.UploadsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1UploadsPost**](UploadsApi.md#learnApiPublicV1UploadsPost) | **POST** /learn/api/public/v1/uploads | Upload

<a name="learnApiPublicV1UploadsPost"></a>
# **learnApiPublicV1UploadsPost**
> UploadedFileInfo learnApiPublicV1UploadsPost(opts)

Upload

Upload a file to temporary storage. The request is a multipart/form-data POST following RFC 1867. (https://www.ietf.org/rfc/rfc1867.txt)  The uploaded file will be scanned for potential security threats by the system&#x27;s XSS filters. If the file is deemed as unsafe, the request will be rejected and an HTTP Status of 422 is returned.  Returns an ID of the file reference, so it can be used for processing by a different service.  Example Request: &lt;pre&gt;  curl -X POST -H &#x27;Authorization: Bearer your_token&#x27; -F &#x27;file&#x3D;@/path/to/your/file&#x27; https://YOUR_LEARN_INSTANCE/learn/api/public/v1/uploads  &lt;/pre&gt;  **Since**: 3100.12.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.UploadsApi();
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1UploadsPost(opts, (error, data, response) => {
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
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**UploadedFileInfo**](UploadedFileInfo.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

