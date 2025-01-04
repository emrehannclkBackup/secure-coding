pipeline {
    agent any
   
		
	}
    stages {
        stage('Github') {
            steps {
               git branch: 'main', credentialsId: 'github', url: 'https://github.com/emrehannclkBackup/secure-coding.git'
                echo 'echo Deploying the project...'
                

               }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}
