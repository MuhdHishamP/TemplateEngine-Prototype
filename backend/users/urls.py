from django.urls import path, include, re_path
from users import views


urlpatterns = [
    
    ### GET Urls ###
    path('UserListView', views.UserListView.as_view()),
    path('BusinessProfileListView', views.BusinessProfileListView.as_view()),
    path('TemplatesListView', views.TemplatesListView.as_view()),
    
    ### POST Urls ###
    path('<int:id>/AddBusinessProfile', views.AddBusinessProfile.as_view()),
    path('<int:id>/AddTemplates', views.AddTemplates.as_view()),
    
    ### PUT Urls ###
    path('<int:id>/FetchBusinessProfile', views.FetchBusinessProfile.as_view()),
    
    ### PATCH Urls ###
    path('<int:id>/UpdateBusinessProfileAPI', views.UpdateBusinessProfileAPI.as_view()),
    
    ### Delete Urls ###
    path('<int:id>/DeleteBusinessProfileAPI', views.DeleteBusinessProfileAPI.as_view()),
    
]