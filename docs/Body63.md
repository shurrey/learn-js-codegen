# LearnApIs.Body63

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **String** | An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create. | [optional] 
**parentId** | **String** | The primary ID of the group&#x27;s parent group set. | [optional] 
**name** | **String** | The title of the group. | 
**description** | **String** | The description of the group. This field supports BbML; see &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html&#x27;&gt;here&lt;/a&gt; for more information. | [optional] 
**isGroupSet** | **Boolean** | Whether or not this is a group set.  **Since**: 3700.1.0 | [optional] 
**availability** | [**Availability6**](Availability6.md) |  | [optional] 
**enrollment** | [**Enrollment**](Enrollment.md) |  | [optional] 
