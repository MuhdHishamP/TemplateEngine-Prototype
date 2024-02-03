
from django.contrib import admin
from django.urls import path,include,re_path
from django.conf import settings
from rest_framework.routers import DefaultRouter
from django.views.static import serve

default_router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    path('admin/', admin.site.urls),
    
     path('api/',include('api.urls')),
    path('users/',include('users.urls')),
    
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('auth/', include('rest_framework_social_oauth2.urls')),
]

urlpatterns+= default_router.urls

