pipeline {
    agent any
   
		
	}
    stages {
        stage('Github') {
            steps {
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/emrehannclkBackup/secure-coding'
                echo 'echo Deploying the project...'
                

               }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }

