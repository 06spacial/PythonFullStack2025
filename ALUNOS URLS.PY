
from django.urls import path
from . import views

urlpatterns = [
    path('', views.listar_alunos, name='listar_alunos'),
    path('novo/', views.cadastrar_aluno, name='cadastrar_aluno'),
    path('<int:aluno_id>/', views.detalhes_aluno, name='detalhes_aluno'),
]

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('alunos/', include('alunos.urls')),  
]