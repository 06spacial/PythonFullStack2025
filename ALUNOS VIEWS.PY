from django.shortcuts import render
from django.http import HttpResponse

def listar_alunos(request):
    return render ("Listando todos os alunos.")

def cadastrar_aluno(request):
    return render ("Formulário para cadastrar um novo aluno.")

def detalhes_aluno(request, aluno_id):
    return render ("Detalhes do aluno com ID {aluno_id}.")