pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/yourusername/docker-node-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic test...'
                sh 'node -v'
            }
        }
    }
}

