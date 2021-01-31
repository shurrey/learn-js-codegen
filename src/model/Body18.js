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
import QuestionHandler from './QuestionHandler';

/**
* The Body18 model module.
* @module model/Body18
* @version 3900.6.0
*/
export default class Body18 {
    /**
    * Constructs a new <code>Body18</code>.
    * @alias module:model/Body18
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Body18</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body18} obj Optional instance to populate.
    * @return {module:model/Body18} The populated <code>Body18</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body18();
                        
            
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('correctResponseFeedback')) {
                obj['correctResponseFeedback'] = ApiClient.convertToType(data['correctResponseFeedback'], 'String');
            }
            if (data.hasOwnProperty('incorrectResponseFeedback')) {
                obj['incorrectResponseFeedback'] = ApiClient.convertToType(data['incorrectResponseFeedback'], 'String');
            }
            if (data.hasOwnProperty('instructorNotes')) {
                obj['instructorNotes'] = ApiClient.convertToType(data['instructorNotes'], 'String');
            }
            if (data.hasOwnProperty('questionHandler')) {
                obj['questionHandler'] = QuestionHandler.constructFromObject(data['questionHandler']);
            }
        }
        return obj;
    }

    /**
    * The title of the question.
    * @member {String} title
    */
    'title' = undefined;
    /**
    * The main text content for the question. It may include plain and formatted text, and all kinds of content supported by the full text editor.
    * @member {String} text
    */
    'text' = undefined;
    /**
    * Position of the Question on the Assessment Canvas.
    * @member {Number} position
    */
    'position' = undefined;
    /**
    * The point value for the question.
    * @member {Number} points
    */
    'points' = undefined;
    /**
    * Feedback displayed to students when their submitted response is correct.
    * @member {String} correctResponseFeedback
    */
    'correctResponseFeedback' = undefined;
    /**
    * Feedback displayed to students when their submitted response is incorrect.
    * @member {String} incorrectResponseFeedback
    */
    'incorrectResponseFeedback' = undefined;
    /**
    * Text added to the question as a note for the instructor. It is not intended to be displayed to students.
    * @member {String} instructorNotes
    */
    'instructorNotes' = undefined;
    /**
    * @member {module:model/QuestionHandler} questionHandler
    */
    'questionHandler' = undefined;




}
