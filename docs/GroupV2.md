# LearnApIs.GroupV2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The primary ID of the group. | [optional] 
**externalId** | **String** | An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create. | [optional] 
**groupSetId** | **String** | The primary ID of the group&#x27;s parent group set. | [optional] 
**name** | **String** | The title of the group. | [optional] 
**description** | **String** | The description of the group. This field supports BbML; see &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html&#x27;&gt;here&lt;/a&gt; for more information. | [optional] 
**availability** | [**Availability6**](Availability6.md) |  | [optional] 
**enrollment** | [**Enrollment4**](Enrollment4.md) |  | [optional] 
**uuid** | **String** | A system-wide unique identifier created by Learn | [optional] 
**created** | **Date** | Created date of the group  **Since**: 3800.8.0 | [optional] 
**modified** | **Date** | Modified date of the group  **Since**: 3800.8.0 | [optional] 
