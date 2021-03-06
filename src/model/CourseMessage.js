/**
 * Learn APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3900.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CourseMessageAttachment from './CourseMessageAttachment';
import User from './User';

/**
* The CourseMessage model module.
* @module model/CourseMessage
* @version 3900.6.0
*/
export default class CourseMessage {
    /**
    * Constructs a new <code>CourseMessage</code>.
    * @alias module:model/CourseMessage
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CourseMessage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CourseMessage} obj Optional instance to populate.
    * @return {module:model/CourseMessage} The populated <code>CourseMessage</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CourseMessage();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('postedDate')) {
                obj['postedDate'] = ApiClient.convertToType(data['postedDate'], 'Date');
            }
            if (data.hasOwnProperty('isRead')) {
                obj['isRead'] = ApiClient.convertToType(data['isRead'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = User.constructFromObject(data['sender']);
            }
            if (data.hasOwnProperty('senderId')) {
                obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
            }
            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = CourseMessageAttachment.constructFromObject(data['attachment']);
            }
            if (data.hasOwnProperty('toUsers')) {
                obj['toUsers'] = ApiClient.convertToType(data['toUsers'], ['String']);
            }
            if (data.hasOwnProperty('ccUsers')) {
                obj['ccUsers'] = ApiClient.convertToType(data['ccUsers'], ['String']);
            }
            if (data.hasOwnProperty('bccUsers')) {
                obj['bccUsers'] = ApiClient.convertToType(data['bccUsers'], ['String']);
            }
            if (data.hasOwnProperty('isExistingAttachment')) {
                obj['isExistingAttachment'] = ApiClient.convertToType(data['isExistingAttachment'], 'Boolean');
            }
            if (data.hasOwnProperty('isReply')) {
                obj['isReply'] = ApiClient.convertToType(data['isReply'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * The ID of the message
    * @member {String} id
    */
    'id' = undefined;
    /**
    * The subject of the message
    * @member {String} subject
    */
    'subject' = undefined;
    /**
    * The body text associated with this message. This field supports BbML; see <a target='_blank' href='https://docs.blackboard.com/learn/REST/Blackboard%20Markup%20Language%20-%20BbML.html'>here</a> for more information.
    * @member {String} body
    */
    'body' = undefined;
    /**
    * The date this message was created.
    * @member {Date} postedDate
    */
    'postedDate' = undefined;
    /**
    * Whether or not the message has been read
    * @member {Boolean} isRead
    */
    'isRead' = undefined;
    /**
    * Type of the message   | Type      | Description  | --------- | --------- | | System | Course message generated by the system, to be more specific, the message created when adding a new participant into the conversation. | | Normal | Any course message sent by the course conversation participants will be considered as \"NORMAL\" type. | 
    * @member {module:model/CourseMessage.TypeEnum} type
    */
    'type' = undefined;
    /**
    * @member {module:model/User} sender
    */
    'sender' = undefined;
    /**
    * The ID of the sender.
    * @member {String} senderId
    */
    'senderId' = undefined;
    /**
    * @member {module:model/CourseMessageAttachment} attachment
    */
    'attachment' = undefined;
    /**
    * The to participants of the message
    * @member {Array.<String>} toUsers
    */
    'toUsers' = undefined;
    /**
    * The cc participants of the message
    * @member {Array.<String>} ccUsers
    */
    'ccUsers' = undefined;
    /**
    * The bcc participants of the message
    * @member {Array.<String>} bccUsers
    */
    'bccUsers' = undefined;
    /**
    * Whether or not the attachment is the existing attachment for the message
    * @member {Boolean} isExistingAttachment
    */
    'isExistingAttachment' = undefined;
    /**
    * Whether or not this message is a reply to another message
    * @member {Boolean} isReply
    */
    'isReply' = undefined;



    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
        /**
         * value: "System"
         * @const
         */
        "System": "System",
        /**
         * value: "Normal"
         * @const
         */
        "Normal": "Normal"    };

}
