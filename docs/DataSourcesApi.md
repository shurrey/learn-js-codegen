# LearnApIs.DataSourcesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1DataSourcesDataSourceIdDelete**](DataSourcesApi.md#learnApiPublicV1DataSourcesDataSourceIdDelete) | **DELETE** /learn/api/public/v1/dataSources/{dataSourceId} | Delete Data Source
[**learnApiPublicV1DataSourcesDataSourceIdGet**](DataSourcesApi.md#learnApiPublicV1DataSourcesDataSourceIdGet) | **GET** /learn/api/public/v1/dataSources/{dataSourceId} | Get Data Source
[**learnApiPublicV1DataSourcesDataSourceIdPatch**](DataSourcesApi.md#learnApiPublicV1DataSourcesDataSourceIdPatch) | **PATCH** /learn/api/public/v1/dataSources/{dataSourceId} | Update Data Source
[**learnApiPublicV1DataSourcesGet**](DataSourcesApi.md#learnApiPublicV1DataSourcesGet) | **GET** /learn/api/public/v1/dataSources | Get Data Sources
[**learnApiPublicV1DataSourcesPost**](DataSourcesApi.md#learnApiPublicV1DataSourcesPost) | **POST** /learn/api/public/v1/dataSources | Create Data Source

<a name="learnApiPublicV1DataSourcesDataSourceIdDelete"></a>
# **learnApiPublicV1DataSourcesDataSourceIdDelete**
> learnApiPublicV1DataSourcesDataSourceIdDelete(dataSourceId, opts)

Delete Data Source

Deletes a data source.  The &#x27;system.datasource.manager.VIEW&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DataSourcesApi();
let dataSourceId = "dataSourceId_example"; // String | The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example            |  |------------|--------------------|  | primary    | _123_1             |  | externalId | externalId:math101 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1DataSourcesDataSourceIdDelete(dataSourceId, opts, (error, data, response) => {
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
 **dataSourceId** | **String**| The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example            |  |------------|--------------------|  | primary    | _123_1             |  | externalId | externalId:math101 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1DataSourcesDataSourceIdGet"></a>
# **learnApiPublicV1DataSourcesDataSourceIdGet**
> DataSource learnApiPublicV1DataSourcesDataSourceIdGet(dataSourceId, opts)

Get Data Source

Loads a data source.  The &#x27;system.datasource.manager.VIEW&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DataSourcesApi();
let dataSourceId = "dataSourceId_example"; // String | The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example            |  |------------|--------------------|  | primary    | _123_1             |  | externalId | externalId:math101 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1DataSourcesDataSourceIdGet(dataSourceId, opts, (error, data, response) => {
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
 **dataSourceId** | **String**| The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example            |  |------------|--------------------|  | primary    | _123_1             |  | externalId | externalId:math101 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**DataSource**](DataSource.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1DataSourcesDataSourceIdPatch"></a>
# **learnApiPublicV1DataSourcesDataSourceIdPatch**
> DataSource learnApiPublicV1DataSourcesDataSourceIdPatch(bodydataSourceId, opts)

Update Data Source

Updates a data source.  The &#x27;system.datasource.manager.VIEW&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DataSourcesApi();
let body = new LearnApIs.Body46(); // Body46 | JSON input object.
let dataSourceId = "dataSourceId_example"; // String | The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example            |  |------------|--------------------|  | primary    | _123_1             |  | externalId | externalId:math101 |  
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1DataSourcesDataSourceIdPatch(bodydataSourceId, opts, (error, data, response) => {
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
 **body** | [**Body46**](Body46.md)| JSON input object. | 
 **dataSourceId** | **String**| The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type.    | ID type    | Example            |  |------------|--------------------|  | primary    | _123_1             |  | externalId | externalId:math101 |   | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**DataSource**](DataSource.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1DataSourcesGet"></a>
# **learnApiPublicV1DataSourcesGet**
> InlineResponse20031 learnApiPublicV1DataSourcesGet(opts)

Get Data Sources

Returns a list of data sources.  The &#x27;system.datasource.manager.VIEW&#x27; entitlement is needed.  **Since**: 3000.1.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DataSourcesApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'externalId': "externalId_example", // String | The 'batchUid' value to use as search criteria.  Currently only supports 'contains' searches.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1DataSourcesGet(opts, (error, data, response) => {
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
 **externalId** | **String**| The &#x27;batchUid&#x27; value to use as search criteria.  Currently only supports &#x27;contains&#x27; searches. | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20031**](InlineResponse20031.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1DataSourcesPost"></a>
# **learnApiPublicV1DataSourcesPost**
> DataSource learnApiPublicV1DataSourcesPost(body, opts)

Create Data Source

Creates a data source.  The &#x27;system.datasource.manager.VIEW&#x27; entitlement is needed.  **Since**: 2015.11.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.DataSourcesApi();
let body = new LearnApIs.Body45(); // Body45 | JSON input object.
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1DataSourcesPost(body, opts, (error, data, response) => {
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
 **body** | [**Body45**](Body45.md)| JSON input object. | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**DataSource**](DataSource.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

