# LearnApIs.Body9

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parentId** | **String** | The ID of the content&#x27;s parent.  Note that top-level contents do not have parents. The &#x27;parentId&#x27; field is a writable field as of the Bb Learn 3200.6.0 release.  Specifying a new value in PATCH requests allows the Content object to be moved from one parent to another. | [optional] 
**title** | **String** | The title or name of this content. Typically shown as the main text to click in the course outline when accessing the content. | 
**body** | **String** | The body text associated with this content. This field supports BbML; see &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html&#x27;&gt;here&lt;/a&gt; for more information. | [optional] 
**description** | **String** | The short description of this content.  This field is not used in Classic courses.  For Ultra courses this is used to show information directly on the course outline. | [optional] 
**position** | **Number** | The position of this content within its parent folder. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent. | [optional] 
**launchInNewWindow** | **Boolean** | Indicates whether the content is going to open in a new window.  **Since**: 3800.10.0 | [optional] 
**reviewable** | **Boolean** | Indicates whether Review Status is enabled for this content. Content items with review status enabled can be marked as reviewed by students. This can be used to track performance and in Adaptive Release rules to control the release of other content. Reviewable field is currently being used only in Classic courses.  **Since**: 3700.15.0 | [optional] 
**availability** | [**Availability2**](Availability2.md) |  | [optional] 
**contentHandler** | [**ContentHandler**](ContentHandler.md) |  | [optional] 
