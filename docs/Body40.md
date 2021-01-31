# LearnApIs.Body40

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the message | [optional] 
**subject** | **String** | The subject of the message | [optional] 
**body** | **String** | The body text of the message. This field supports BbML; see &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html&#x27;&gt;here&lt;/a&gt; for more information. | [optional] 
**isRead** | **Boolean** | Whether or not the message has been read | [optional] 
**attachment** | [**CourseMessageAttachment**](CourseMessageAttachment.md) |  | [optional] 
**toUsers** | **[String]** | The to participants of the message | [optional] 
**ccUsers** | **[String]** | The cc participants of the message | [optional] 
**bccUsers** | **[String]** | The bcc participants of the message | [optional] 
**isExistingAttachment** | **Boolean** | Whether or not the attachment is the existing attachment for the message | [optional] 
**isReply** | **Boolean** | Whether or not this message is a reply to another message | [optional] 
