# LearnApIs.SISLogsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1LogsSisDataSetsIdGet**](SISLogsApi.md#learnApiPublicV1LogsSisDataSetsIdGet) | **GET** /learn/api/public/v1/logs/sis/dataSets/{id} | Get SIS Logs By Data Set Uid

<a name="learnApiPublicV1LogsSisDataSetsIdGet"></a>
# **learnApiPublicV1LogsSisDataSetsIdGet**
> InlineResponse20043 learnApiPublicV1LogsSisDataSetsIdGet(id, opts)

Get SIS Logs By Data Set Uid

  Returns a list of SIS Integration logs. Users with &#x27;system.dataintegrations.log.VIEW&#x27; entitlement can view these logs. &lt;/p&gt; &lt;/p&gt; NOTE: If integration is processing the feed file then 423 (LOCKED) will be returned as response.  **Since**: 3200.0.1

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.SISLogsApi();
let id = "id_example"; // String | : dataSetUid of the integration
let opts = { 
  'level': "level_example", // String | : Logs can be filtered with level. Default level is Error. Logs will be pulled of that level and above          i.e. for level = Warning result set will have warning and error level log messages
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1LogsSisDataSetsIdGet(id, opts, (error, data, response) => {
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
 **id** | **String**| : dataSetUid of the integration | 
 **level** | **String**| : Logs can be filtered with level. Default level is Error. Logs will be pulled of that level and above          i.e. for level &#x3D; Warning result set will have warning and error level log messages | [optional] 
 **offset** | **Number**| The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned. There may be less if the query returned less than the maximum. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

