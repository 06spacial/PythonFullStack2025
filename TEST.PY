
from django.urls import path
from . import views 

## Arquivo views

from django.http import HttpResponse
def listar_alunos(request):
    return HttpResponse(" Listar")
# alunos/views.py

from django.http import HttpResponse

def listar_alunos(request):
    return HttpResponse("Listando todos os alunos.")

def cadastrar_aluno(request):
    return HttpResponse("Formulário para cadastrar um novo aluno.")

def detalhes_aluno(request, aluno_id):
    return HttpResponse(f"Detalhes do aluno com ID {aluno_id}.")
