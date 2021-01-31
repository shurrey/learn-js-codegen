# LearnApIs.CourseAnnouncement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Primary key identifier | [optional] 
**title** | **String** | The title of this Announcement. | [optional] 
**body** | **String** | The message body of the Announcement. This field supports BbML; see &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html&#x27;&gt;here&lt;/a&gt; for more information. | [optional] 
**creator** | **String** | The user that created the Announcement. | [optional] 
**draft** | **Boolean** | An indication of whether or not the Announcement is in draft status. | [optional] 
**availability** | [**Availability12**](Availability12.md) |  | [optional] 
**created** | **Date** | The date that the Announcement was created. | [optional] 
**modified** | **Date** |  | [optional] 
**participants** | **Number** | The number of users that the Announcement will reach.  Shown when adding the query parameter: \&quot;expand&#x3D;readCount\&quot;. | [optional] 
**position** | **Number** | The position of the Announcement. | [optional] 
**readCount** | **Number** | The number of reads for the Announcement.  Shown when adding the query parameter: \&quot;expand&#x3D;readCount\&quot;. | [optional] 
