from django.urls import path, include, re_path
from api import views


urlpatterns = [
    
    ### POST Urls ###
    path('<int:id>/AddBrandMeta', views.AddBrandMeta.as_view()), 
    path('<int:id>/AddBuilderMeta', views.AddBuilderMeta.as_view()), 
    
    
    ### List Urls ###
    path('BrandListListView', views.BrandListListView.as_view()), 
    path('BuilderMetaListView', views.BuilderMetaListView.as_view()),
    
]