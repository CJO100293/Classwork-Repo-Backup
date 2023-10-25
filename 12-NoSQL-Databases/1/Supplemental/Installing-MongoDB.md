# Installing MongoDB on your Machine

### Contents

1. [Installing MongoDB on Windows](#1-installing-mongodb-on-windows)
2. [Configuring MongoDB on Windows](#2-configuring-mongodb-on-windows)
3. [Installing MongoDB on MacOS](#3-installing-mongodb-on-macos)
4. [Configuring MongoDB on MacOS](#4-configuring-mongodb-on-macos)

- - -

## 1. Installing MongoDB on Windows
Ref: [Install MongoDB Community Edition on Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

1. Go to the MongoDB download page: [MongoDB Download Center](https://www.mongodb.com/try/download/community).

2. Scroll down, go to the download button and make sure it is under the "MongoDB Community Server Download" section. The latest version should be around 6.06+.

3. Open up Windows Explorer and locate the installation file (it should be in the default directory where your browser stores downloads). Open the file and follow the instructions.

   * When the installer prompts you to "Choose Setup Type," click the Complete button, then carry on.

   * De-select "Install MongoD as a Service". You can leave the default data and log directory intact.

   * Install MongoDB Compass. It will be needed in the lesson.

- - -

## 2. Configuring MongoDB on Windows

1. You need to create a data directory for your MongoDB installation or it won't run. Open Git Bash then cd your way to the root directory: `cd c:`

2. Run the following command: `mkdir -p data/db`

   * This is the default location for MongoDB’s databases. Remember, you need a directory for your databases or else you MongoDB will refuse to run.

3. You’ll also want to add MongoDB’s path to the PATH environment variables for your computer so that you can run/launch MongoDB easily from the bash command line.

4. First, locate the directory where you installed MongoDB. This is likely `C:\\Program Files\\MongoDB\\Server\\6.0\\bin`. Copy this directory to your clipboard.

5. Then, open up the System menu or Control Panel on your machine. These are usually accessible via the Start menu or Search Bar in Windows operating systems.

6. Go to Advanced Settings.

   * If you are on Windows 10 and opened the Control Panel, click **System and Security**; **System**; and **Advanced System Settings**.

7. When a new window opens up, click the **Environment Variables** button located toward the bottom of the window.

8. An Environment Variables window should open up. Look at the bottom half of this window, a scrollable table called "System Variables." Look at the Variable column and search for the variable called Path. Click on it, then click the "Edit…" button below.

9. The next window will look different depending on your version of Windows. You’ll either be able to press the "New" button and paste your MongoDB directory into the input box that shows up, or you’ll have to paste the directory at the end of a long string of other directories. So it goes.

   * If you would prefer video instructions for this part, watch this:
     [Youtube Link](https://www.youtube.com/watch?v=sBdaRlgb4N8&feature=youtu.be&t=120)

10. Test if it worked: Close your current Git Bash window, then reopen it and run this command: `mongod`

    * **NOTE**: There is no "b" at the end, simply `mongod`

11. If `mongod` is still running, great job! You’ve installed MongoDB. Your instructor will take it from here.

12. If `mongod` didn’t run and instead your bash threw a "command not found" error, make sure you added MongoDB’s bin directory to your PATH variable (see step 5). Then, close out git bash and try running mongod again.

13. If mongod starts but closes after a series of prompts, make sure you created the `/data/db` directory in your root. MongoDB cannot run without this directory (see steps 1 and 2).

14. If you’re still encountering issues starting mongod, please ask for assistance from one of the TAs or the instructor.

15. To exit the server, close the window or use "Ctrl + C" to exit out of the server.

## Installing MongoDB Shell Download
Ref: [MongoDB Shell Download](https://www.mongodb.com/try/download/shell)

This is not installed automatically when you first installed the MongoDB server.

1. Go to the download page here: [MongoDB Shell Download](https://www.mongodb.com/try/download/shell)

2. Under the "Platform" section, select "Windows 64-bit (8.1+) (MSI)" and download the file.
    * Make sure it is the MSI version and not a zipped file. Otherwise, you can't install it.

3. Double-click on the file, and follow the prompts for a full installation.

- - -

## 3. Installing MongoDB on MacOS

1. The easiest way to install mongodDB on a Mac or on any platform is to use homebrew. At this point you should already have homebrew installed. You can verify your installation by running `brew -v` in your terminal.

   * If you get an error instead of a version number, visit the [homebrew website](https://brew.sh/) to install it.

2. Once you have homebrew installed, run the following command in your terminal: `brew install mongodb-community@6.0`.

3. Install mongosh with: `brew install mongosh`
