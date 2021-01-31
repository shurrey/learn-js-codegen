# LearnApIs.LTIDomainConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID associated with this domainConfig. | [optional] 
**primaryDomain** | **String** | The primary domain name associated with this configuration. | [optional] 
**clientId** | **String** | The client id associated with this configuration. Only applicable for LTI versions 1.3+, excluding 2.0  **Since**: 3600.0.0 | [optional] 
**status** | **String** | Enum that indicates if the set of domains associated with this config can or cannot be linked to.   | Type      | Description  | --------- | --------- | | Approved |  | | Excluded |  | | NeedsApproval |   **Since**: 3300.9.0 |  | [optional] 
**perLinkCredentials** | **Boolean** | If true, a new link to this LTI domain must supply its own key and secret. If false, the key and secret for this domain are already configured system-wide. This is a read-only property that is determined by the presence of a key and secret. | [optional] 
**sendUserDataType** | **String** | Enum indicating when user data can be sent to the LTI tool provider.   | Type      | Description  | --------- | --------- | | Never |  | | Sslonly |  | | Always |   **Since**: 3300.9.0 |  | [optional] 
**sendRole** | **Boolean** | Whether the user&#x27;s role can be sent to the LTI tool provider. | [optional] 
**sendName** | **Boolean** | Whether the user&#x27;s name can be sent to the LTI tool provider. | [optional] 
**sendEmail** | **Boolean** | Whether the user&#x27;s email address can be sent to the LTI tool provider. | [optional] 
**useSplashScreen** | **Boolean** | Whether a splash screen is shown before launching the LTI link.  Cannot be set to true if allowMembershipService is true. | [optional] 
**allowMembershipService** | **Boolean** | Whether the Tool is allowed to call the LTI Names and Roles service and get the course memberships. | [optional] 
**allowGradesService** | **Boolean** | Whether the Tool is allowed to call the LTI Assignment and Grades service and manage line items and grades.  **Since**: 3600.0.0 | [optional] 
**publicKey** | **String** | The public key of the tool, if specified. It is optional and can be null  **Since**: 3800.17.0 | [optional] 
**jwksUrl** | **String** | The JWKS URL of the tool, if specified. It is optional and can be null  **Since**: 3800.17.0 | [optional] 
**allowEdit** | **Boolean** | Whether this domain configuration is editable by system admins. The \&quot;internal\&quot; apps created by Blackboard are non-editable. They are created or updated automatically or via Dev Portal, and they are locked to system admins or anyone with public REST access to change them.  **Since**: 3800.17.0 | [optional] 
**customParameters** | **{String: String}** | The custom parameters for the given domain. | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `Approved` (value: `"Approved"`)
* `Excluded` (value: `"Excluded"`)
* `NeedsApproval` (value: `"NeedsApproval"`)


<a name="SendUserDataTypeEnum"></a>
## Enum: SendUserDataTypeEnum

* `Never` (value: `"Never"`)
* `Sslonly` (value: `"Sslonly"`)
* `Always` (value: `"Always"`)

