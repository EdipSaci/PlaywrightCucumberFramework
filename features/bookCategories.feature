@lib-03
Feature: Book Categories

    As a user, I want to see 23 book categories, so I can filter my favorite books.

    #* AC1: users should see 23 book categories When users click the Book Categories drop down
    #*      ALL, Action and Adventure, Anthology, Classic, Comic and Graphic Novel, Crime and Detective, Drama
    #*      , Fable, Fairy Tale, Fan-Fiction, Fantasy, Historical Fiction, Horror, Science Fiction, Humor
    #*      , Biography/Autobiography ,Romance, Short Story, Essay, Memoir, Poetry, Thrillers, Young adults


    # TODO: verify users see 23 book categories
    @lib-03-01
    Scenario Outline: Verify 21 book categories are displayed under the Book Categories drop down
        Given user is already on the login page
        And user is already logged in as "<user-type>"
        When user click the Books link
        And user clicks the book categories drop down
        Then user should see 21 book categories
        Examples:
            | user-type |
            | admin     |
            | student   |



#? Should there be more scenarios for this user story? Feel free to add more scenarios.