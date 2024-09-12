pipeline {
    agent any
    tools {
        nodejs '20'
    }
    stages {
        stage('Clone Project') {
            steps {
                git 'https://github.com/ElQuenta/isc-system-core.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}