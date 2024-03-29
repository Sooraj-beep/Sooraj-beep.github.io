---
# Leave the homepage title empty to use the site title
title: 'Sooraj Arakkal'
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: features
    content:
      title: Skills
      items:
        - name: Python
          icon: python
          icon_pack: fab
        - name: JavaScript
          icon: js
          icon_pack: fab
        - name: Java
          icon: java
          icon_pack: fab
        - name: C/C++
          icon: code
          icon_pack: fas
        - name: R
          icon: r-project
          icon_pack: fab
        - name: React
          icon: react
          icon_pack: fab
        - name: d3js
          icon: chart-simple
          icon_pack: fas
        - name: Material UI
          icon: m
          icon_pack: fas
        - name: Jest
          icon: vials
          icon_pack: fas
        - name: Cypress
          icon: robot
          icon_pack: fas
        - name: AWS
          icon: aws
          icon_pack: fab
        - name: GCP
          icon: cloud
          icon_pack: fas




  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Teaching Assistant
          company: University of Alberta - CMPUT 101 (Introduction to Computing)
          company_url: 'https://www.ualberta.ca/index.html'
          company_logo: ualberta
          location: Edmonton, Alberta
          date_start: '2023-01-01'
          date_end: '2023-04-01'
          description: |2-
              * Held lab sessions where I presented on various topics in Computing Science.
              * Answered student questions.
              * Graded Midterms, Lab work, and Assignments.

        - title: Software Development Engineer Intern
          company: Amazon
          company_url: 'https://www.amazon.ca/'
          company_logo: amazon
          location: Vancouver, British Columbia
          date_start: '2022-05-01'
          date_end: '2022-08-01'
          description: |2- 
              * Developed a service that allows clients to define customer cohorts used for product recommendations.
              * Wrote API specifications using Smithy and Java and deployed them using AWS Lambda and API Gateway.
              * Designed a dashboard using React and TypeScript for external clients to interact with API endpoints.
              * Implemented authentication and input validation to ensure app robustness and security.

        - title: Cmputer Science Co-op
          company: Interface Fluidics Limited
          company_url: 'https://www.interfacefluidics.com/'
          location: Edmonton, Alberta
          date_start: '2021-08-01'
          date_end: '2022-04-01'
          description: |2- 
              * Refactored GraphQL queries resulting in 7500% faster data access time using virtualization and pagination.
              * Updated image analysis UI which decreased task completion time by 500% and mouse clicks by half.
              * Created an algorithm in Python to numerically sort (using regex) and stack images from the database.
              * Developed an algorithm to convert images into video using Python and FFmpeg.

        - title: Full-Stack Software Developer
          company: Sparrowfi
          company_url: 'https://www.sparrowfi.com/'
          location: Remote
          date_start: '2021-05-01'
          date_end: '2021-06-01'
          description: |2- 
              * Wrote backend code that handled external HTTP requests from third party endpoints.
              * Commended for clear communication and unparalleled willingness to learn.
              * Gained experience in AWS Lambda, DynamoDB, GraphQL, and styling in CSS using Bulma.io.

        - title: Teaching Assistant
          company: Universisty of Alberta - CMPUT 272 (Formal Systems and Logic in Computing Science) 
          company_url: 'https://www.ualberta.ca/index.html'
          company_logo: ualberta
          location: Edmonton, Alberta
          date_start: '2021-01-01'
          date_end: '2021-04-01'
          description: |2- 
              * Assisted professor in setting the difficulty of the course, grading student assignments, and replying to queries.
              * Gave 200 students detailed midterm feedback which contributed to 10% higher average marks in final exam.
              * Learned how to effectively manage time between a full course load and working a part-time job.

    design:
      columns: '2'
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Accomplish&shy;ments'
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - certificate_url: uploads/shaw-cert.pdf
          date_end: ''
          date_start: '2020-04-07'
          description: ''
          organization: Shaw Academy
          organization_url: https://www.shawacademy.com/
          title: Diploma in Web Development
          url: ''

        - certificate_url: uploads/microsoft-cert.pdf
          date_end: ''
          date_start: '2019-11-23'
          organization: Microsoft
          title: Microsoft Azure - Web Development
          url: ''


        # - certificate_url: https://www.datacamp.com
        #   date_end: '2020-12-21'
        #   date_start: '2020-07-01'
        #   description: ''
        #   organization: DataCamp
        #   organization_url: https://www.datacamp.com
        #   title: 'Object-Oriented Programming in R'
        #   url: ''

    design:
      columns: '2'
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Discord Bots
          tag: Discord Bots
        - name: Data Visualization
          tag: Data Visualization
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: markdown
    content:
      title: Gallery
      subtitle: ''
      text: |-
        {{< gallery album="demo" >}}
    design:
      columns: '1'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      # Contact (add or remove contact options as necessary)
      email: soorajarakkal@gmail.com
      contact_links:
        - icon: linkedin
          icon_pack: fab
          name: Connect with me
          link: 'https://www.linkedin.com/in/sooraj-arakkal/'
        - icon: discord
          icon_pack: fab
          name: Squalo#7809
    design:
      columns: '2'
---
