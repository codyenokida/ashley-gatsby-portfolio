## How to Start (For Ashley)

1.  **First Download/Clone the website**

    Hey hey hey! So first, we need to install Git and this thing called npm. Go to your terminal on your MacBook and type in the following commands.

    ```shell
    # if you don't have git it will prompt you to install it
    git --version
    ```
    
    You're going to want to download this too --> `https://nodejs.org/en/` (this will be important later!!)

    Once you installed Git, we can download this website onto your computer! :)

    For now, we'll put this project folder onto your Desktop!! Just follow the steps!
    ```shell
    # We are going to move the directory to your Desktop
    cd Desktop
    # this is going to create a copy of the project onto your desktop
    git clone https://github.com/codyenokida/ashley-gatsby-portfolio.git
    ```

    Now you should have this project folder downloaded onto your laptop hehe.

2.  **Start by Opening the Project on your browser**

    Navigate into the website directory and start it up.

    ```shell
    # this command moves you into the folder that all my files are in
    cd ashley-gatsby-portfolio/
    # this command installs all of the extra goodies 
    # that I used to make this website look the way it is
    npm install
    # lastly, this command starts up the website onto the server
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Any edits you make on the website will show up here first before the web!

    You must do some other commands to actually push the website onto the internet for EVERYONE to see.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project

    .
    ├── node_modules
    ├── src
      ├── components
      ├── fonts
      ├── images
      ├── pages
        ├── about.js
        ├── animation.js
        ├── design.js
        ├── index.js 
      ├── resume
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

So pretty much, the only important, relavant files for you are in /src/. 

Inside src, we have files that are related to the pages on your website (I think this is pretty self-explanatory right :D)

If you want to add/change your designs, go to VSCode and open the entire project folder.

I left some instructions on the design.js and animation.js file for you to add designs!!

4.  **Final Steps**
You're gonna want to push your changes back on to GitHub in order for it to show the changes on the internet. 

Follow these commands and it will be done!

  ```shell
    # adding changes made to everything in the src folder
    git add src

    # adding all designs and animations that you added 
    git add images

    # commit the changes onto the repository
    git commit -m "I added new designs and animations"

    # Finally, push all the changes onto the web
    git push origin master    
  ```
