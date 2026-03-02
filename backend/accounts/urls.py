from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = router.urls

from django.urls import path
from .views import LogoutView

urlpatterns += [
    path('logout/', LogoutView.as_view(), name='logout'),
]