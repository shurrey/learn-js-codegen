# LearnApIs.Body10

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parentId** | **String** | The id of the parent content for the created assignment. | [optional] 
**title** | **String** | The title used for the created assignment content and gradebook column. Typically shown as the main text to click in the course outline when accessing the assignment. | 
**instructions** | **String** | The text instructions to use when creating the assignment content. This field supports BbML; see &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html&#x27;&gt;here&lt;/a&gt; for more information. | [optional] 
**description** | **String** | The description to use when creating the assignment content. | [optional] 
**position** | **Number** | The position of the created assignment within the other other content of its parent. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent. | [optional] 
**fileUploadIds** | **[String]** |  | [optional] 
**availability** | [**Availability3**](Availability3.md) |  | [optional] 
**grading** | [**Grading**](Grading.md) |  | [optional] 
**score** | [**Score**](Score.md) |  | [optional] 
**originalityReportingTool** | [**OriginalityReportingTool**](OriginalityReportingTool.md) |  | [optional] 
