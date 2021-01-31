# LearnApIs.LtiApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learnApiPublicV1LtiPlacementsGet**](LtiApi.md#learnApiPublicV1LtiPlacementsGet) | **GET** /learn/api/public/v1/lti/placements | Get Placements
[**learnApiPublicV1LtiPlacementsPlacementIdDelete**](LtiApi.md#learnApiPublicV1LtiPlacementsPlacementIdDelete) | **DELETE** /learn/api/public/v1/lti/placements/{placementId} | Delete Placement
[**learnApiPublicV1LtiPlacementsPlacementIdGet**](LtiApi.md#learnApiPublicV1LtiPlacementsPlacementIdGet) | **GET** /learn/api/public/v1/lti/placements/{placementId} | Get Placement
[**learnApiPublicV1LtiPlacementsPlacementIdPatch**](LtiApi.md#learnApiPublicV1LtiPlacementsPlacementIdPatch) | **PATCH** /learn/api/public/v1/lti/placements/{placementId} | Update Placement
[**learnApiPublicV1LtiPlacementsPost**](LtiApi.md#learnApiPublicV1LtiPlacementsPost) | **POST** /learn/api/public/v1/lti/placements | Create Placement
[**learnApipublicV1LtiDomainsDomainIdDelete**](LtiApi.md#learnApipublicV1LtiDomainsDomainIdDelete) | **DELETE** /learn/apipublic/v1/lti/domains/{domainId} | Delete Domain Config
[**learnApipublicV1LtiDomainsDomainIdGet**](LtiApi.md#learnApipublicV1LtiDomainsDomainIdGet) | **GET** /learn/apipublic/v1/lti/domains/{domainId} | Get Domain Config
[**learnApipublicV1LtiDomainsDomainIdPatch**](LtiApi.md#learnApipublicV1LtiDomainsDomainIdPatch) | **PATCH** /learn/apipublic/v1/lti/domains/{domainId} | Update Domain Config
[**learnApipublicV1LtiDomainsGet**](LtiApi.md#learnApipublicV1LtiDomainsGet) | **GET** /learn/apipublic/v1/lti/domains | Get Domain Configs
[**learnApipublicV1LtiDomainsPost**](LtiApi.md#learnApipublicV1LtiDomainsPost) | **POST** /learn/apipublic/v1/lti/domains | Create Domain Config

<a name="learnApiPublicV1LtiPlacementsGet"></a>
# **learnApiPublicV1LtiPlacementsGet**
> InlineResponse20035 learnApiPublicV1LtiPlacementsGet(opts)

Get Placements

Returns a list of LTI placements  Supports the standard paging and sorting query parameters, with a maximum page size of 1000.  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'handle': "handle_example", // String | Search for placements with handle properties that contain this value.  **Since**: 3200.12.0
  'name': "name_example", // String | Search for placements with name properties that contain this value.  **Since**: 3200.12.0
  'type': "type_example", // String | Search for placements with type properties that contain this value.  **Since**: 3200.12.0   | Type      | Description  | --------- | --------- | | Application | Application or Student Tool Placement | | ContentHandler | Content Type placement | | ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 | | System | System-level Tools | | Administrator | Administrator-level Tools  **Since**: 3400.1.0 | | UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 | | BaseNavigation | Base Navigation | | CourseNavigation | Course Navigation | 
  'authorId': "authorId_example", // String | Search for placements with author ID properties that contain this value.  **Since**: 3200.12.0  **Deprecated**: since 3900.0.0; Field was never used and has been removed
  'courseId': "courseId_example", // String | Search for LTI placements that are available for this course. Note this only applies to Application, ContentHandler, and ContentItemMessage types currently  **Since**: 3900.0.0
  'sort': "sort_example", // String | Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"  **Since**: 3100.0.0
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1LtiPlacementsGet(opts, (error, data, response) => {
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
 **handle** | **String**| Search for placements with handle properties that contain this value.  **Since**: 3200.12.0 | [optional] 
 **name** | **String**| Search for placements with name properties that contain this value.  **Since**: 3200.12.0 | [optional] 
 **type** | **String**| Search for placements with type properties that contain this value.  **Since**: 3200.12.0   | Type      | Description  | --------- | --------- | | Application | Application or Student Tool Placement | | ContentHandler | Content Type placement | | ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 | | System | System-level Tools | | Administrator | Administrator-level Tools  **Since**: 3400.1.0 | | UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 | | BaseNavigation | Base Navigation | | CourseNavigation | Course Navigation |  | [optional] 
 **authorId** | **String**| Search for placements with author ID properties that contain this value.  **Since**: 3200.12.0  **Deprecated**: since 3900.0.0; Field was never used and has been removed | [optional] 
 **courseId** | **String**| Search for LTI placements that are available for this course. Note this only applies to Application, ContentHandler, and ContentItemMessage types currently  **Since**: 3900.0.0 | [optional] 
 **sort** | **String**| Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \&quot;(desc)\&quot; suffix to request a descending sort for that property. e.g. \&quot;name.family(desc),created\&quot;  **Since**: 3100.0.0 | [optional] 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1LtiPlacementsPlacementIdDelete"></a>
# **learnApiPublicV1LtiPlacementsPlacementIdDelete**
> learnApiPublicV1LtiPlacementsPlacementIdDelete(placementId, opts)

Delete Placement

Deletes an LTI placement with the specified Id  The &#x27;system.administration.VIEW&#x27; entitlement is required to delete placements  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let placementId = "placementId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1LtiPlacementsPlacementIdDelete(placementId, opts, (error, data, response) => {
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
 **placementId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1LtiPlacementsPlacementIdGet"></a>
# **learnApiPublicV1LtiPlacementsPlacementIdGet**
> LTIPlacement learnApiPublicV1LtiPlacementsPlacementIdGet(placementId, opts)

Get Placement

Returns the LTI placement with the specified Id  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let placementId = "placementId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1LtiPlacementsPlacementIdGet(placementId, opts, (error, data, response) => {
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
 **placementId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**LTIPlacement**](LTIPlacement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApiPublicV1LtiPlacementsPlacementIdPatch"></a>
# **learnApiPublicV1LtiPlacementsPlacementIdPatch**
> LTIPlacement learnApiPublicV1LtiPlacementsPlacementIdPatch(bodyplacementId, opts)

Update Placement

Updates an LTI placement with the given Id  The &#x27;system.administration.VIEW&#x27; entitlement is required to update placements  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let body = new LearnApIs.Body53(); // Body53 | 
let placementId = "placementId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApiPublicV1LtiPlacementsPlacementIdPatch(bodyplacementId, opts, (error, data, response) => {
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
 **body** | [**Body53**](Body53.md)|  | 
 **placementId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**LTIPlacement**](LTIPlacement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApiPublicV1LtiPlacementsPost"></a>
# **learnApiPublicV1LtiPlacementsPost**
> LTIPlacement learnApiPublicV1LtiPlacementsPost(body)

Create Placement

Creates an LTI placement  The &#x27;system.administration.VIEW&#x27; entitlement is required to create placements  **Since**: 3300.0.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let body = new LearnApIs.Body52(); // Body52 | 

apiInstance.learnApiPublicV1LtiPlacementsPost(body, (error, data, response) => {
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
 **body** | [**Body52**](Body52.md)|  | 

### Return type

[**LTIPlacement**](LTIPlacement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApipublicV1LtiDomainsDomainIdDelete"></a>
# **learnApipublicV1LtiDomainsDomainIdDelete**
> learnApipublicV1LtiDomainsDomainIdDelete(domainId, opts)

Delete Domain Config

Deletes an LTI Domain Config.  The &#x27;system.administration.VIEW&#x27; entitlement is needed to delete a domain.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let domainId = "domainId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApipublicV1LtiDomainsDomainIdDelete(domainId, opts, (error, data, response) => {
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
 **domainId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApipublicV1LtiDomainsDomainIdGet"></a>
# **learnApipublicV1LtiDomainsDomainIdGet**
> LTIDomainConfig learnApipublicV1LtiDomainsDomainIdGet(domainId, opts)

Get Domain Config

This endpoint returns the LTI domain config with the specified Id  The &#x27;system.administration.VIEW&#x27; entitlement is needed to get a domain.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let domainId = "domainId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApipublicV1LtiDomainsDomainIdGet(domainId, opts, (error, data, response) => {
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
 **domainId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**LTIDomainConfig**](LTIDomainConfig.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApipublicV1LtiDomainsDomainIdPatch"></a>
# **learnApipublicV1LtiDomainsDomainIdPatch**
> LTIDomainConfig learnApipublicV1LtiDomainsDomainIdPatch(bodydomainId, opts)

Update Domain Config

Updates an LTI Domain Config.  The &#x27;system.administration.VIEW&#x27; entitlement is needed to update a domain.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let body = new LearnApIs.Body55(); // Body55 | JSON input object
let domainId = "domainId_example"; // String | 
let opts = { 
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApipublicV1LtiDomainsDomainIdPatch(bodydomainId, opts, (error, data, response) => {
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
 **body** | [**Body55**](Body55.md)| JSON input object | 
 **domainId** | **String**|  | 
 **fields** | **String**| A comma-delimited list of fields to include in the response. If not specified, all fields will be returned. | [optional] 

### Return type

[**LTIDomainConfig**](LTIDomainConfig.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="learnApipublicV1LtiDomainsGet"></a>
# **learnApipublicV1LtiDomainsGet**
> InlineResponse20036 learnApipublicV1LtiDomainsGet(opts)

Get Domain Configs

This endpoint returns the list of LTI domain configs  The &#x27;system.administration.VIEW&#x27; entitlement is needed to list domains.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let opts = { 
  'offset': 56, // Number | The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.
  'limit': 56, // Number | The maximum number of results to be returned. There may be less if the query returned less than the maximum.
  'fields': "fields_example" // String | A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.
};
apiInstance.learnApipublicV1LtiDomainsGet(opts, (error, data, response) => {
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

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="learnApipublicV1LtiDomainsPost"></a>
# **learnApipublicV1LtiDomainsPost**
> LTIDomainConfig learnApipublicV1LtiDomainsPost(body)

Create Domain Config

Creates an LTI Domain Config.  The &#x27;system.administration.VIEW&#x27; entitlement is needed to create a domain.  **Since**: 3300.9.0

### Example
```javascript
import LearnApIs from 'learn_ap_is';
let defaultClient = LearnApIs.ApiClient.instance;

// Configure API key authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

let apiInstance = new LearnApIs.LtiApi();
let body = new LearnApIs.Body54(); // Body54 | JSON input object

apiInstance.learnApipublicV1LtiDomainsPost(body, (error, data, response) => {
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
 **body** | [**Body54**](Body54.md)| JSON input object | 

### Return type

[**LTIDomainConfig**](LTIDomainConfig.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

